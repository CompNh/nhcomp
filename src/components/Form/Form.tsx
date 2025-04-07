import React, { useState } from "react";
import Button from "../Button/Button";
import Layout from "../PageDesigner/Parts/Layout";
import Section from "../PageDesigner/Parts/Section";
import { FormField } from "./FormTypes";
import useFormReducer from "./Reducer/useFormReducer";
import Label from "../Label/Label";
import { validateFields } from "./Utility/FormUtility";

export interface FormProps {
  title?: string; // ✅ 폼 타이틀 추가
  division: { row: number; col: number };
  formFields: FormField[];
  isActivateInitialButton? : boolean
  onSubmit?: (data: { [key: string]: any }) => void;
  onSerach?: (data: { [key: string]: any }) => void;
}

const Form = ({ 
  title, 
  division, 
  formFields, 
  isActivateInitialButton = true,
  onSubmit, 
  onSerach  
  
}: FormProps) => {
  const reducer = useFormReducer(formFields);

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  
  const rowSizes = Array.from({ length: division.row }, () => "1fr");
  const colSizes = Array.from({ length: division.col }, () => "1fr");

  return (
    <>
      {/* ✅ 타이틀 (왼쪽 정렬) */}
      {title && (
        <div
          style={{
            marginBottom: "16px",            
            borderBottom: "1px solid #ccc",
            fontSize: "15px",
            fontWeight: 600,
            color: "#333",
          }}
        >
          {title}
        </div>
      )}

      <Layout rowSizes={rowSizes} colSizes={colSizes} gap={10}>
        {formFields.map((field) => {
          const [row, col] = field.position;
          const span = field.span || { row: 1, col: 1 };

          const startPosition: [number, number] = [row, col];
          const endPosition: [number, number] = [row + span.row - 1, col + span.col - 1];

          // ✅ 현재 필드 값
          const value = reducer.state[field.key];

          // ✅ 필드에 props 삽입 (value, onChange)
          const componentWithProps = React.isValidElement(field.component)
          ? React.cloneElement(field.component as React.ReactElement<any>, {
              value,
              onChange: (e: any) => {
                const result = e?.target?.value ?? e?.key ?? e;
                // 🔥 1. 상태 저장
                reducer.setFieldValue({ key: field.key, value: result });

                // 🔥 2. 외부에서 전달한 onChange도 호출!
                const originalOnChange = (field.component as React.ReactElement<any>).props?.onChange;
                if (typeof originalOnChange === "function") {
                  originalOnChange(e);
                }
              },    
              onKeyDown : field.filter,
              disabled: field.disabled,
              readOnly: field.isReadOnly,          
            })
          : null;

          return (
            <Section key={field.key} startPosition={startPosition} endPosition={endPosition}>
              <Label
                label={field.label}
                isRequired={field.isRequired}
                toolTip={field.toolTip}                
              />
              {componentWithProps}
              {errors[field.key] && (
                <div style={{ color: "red", fontSize: 12 }}>{errors[field.key]}</div>
              )}
            </Section>
          );
        })}
      </Layout>

      {/* ✅ 버튼 그룹 (오른쪽 정렬) */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px", gap: "2px" }}>
        {onSubmit &&
          <Button type="button" onClick={() => {
            const newErrors = validateFields(formFields, reducer.state);
            setErrors(newErrors);
        
            if (Object.keys(newErrors).length === 0) {
              onSubmit?.(reducer.state);
            }
          }}>
            제출
          </Button>
        }
        {onSerach &&
          <Button type="button" onClick={() => {
            const newErrors = validateFields(formFields, reducer.state);
            setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
              onSerach(reducer.state)
            }

          }}>
            검색
          </Button>
        }
        {isActivateInitialButton &&
          <Button type="button" onClick={() => reducer.resetForm()}>
            초기화
          </Button>
        }
      </div>
    </>
  );
};

export default Form;
