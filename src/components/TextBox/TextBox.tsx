import React, {
  ChangeEvent,
  useEffect,
  useState,
  forwardRef,  
} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import { BaseTextBox } from "../CommonStyle";

export interface TextBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
  apply?: boolean;
  textType?: "number" | "password" | "text" | "email" | "rangeNumber";
}

// ✅ forwardRef 사용
const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      apply,
      onChange,
      value: propValue,
      textType,
      ...props
    }: TextBoxProps,
    ref
  ) => {
    const isRange = textType === "rangeNumber";

    const [value, setValue] = useState<string>(
      propValue ? String(propValue) : ""
    );

    const [range, setRange] = useState<{ min: string; max: string }>({
      min: "",
      max: "",
    });

    // ✅ 외부 value 동기화
    useEffect(() => {
      if (isRange) {
        const [min = "", max = ""] = String(propValue ?? "").split("~");
        setRange({ min, max });
      } else {
        setValue(propValue ? String(propValue) : "");
      }
    }, [propValue, isRange]);

    // ✅ 단일 input 변경
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setValue(newVal);
      onChange?.(e);
    };

    // ✅ range 값 변경 후 호출
    const emitRangeChange = (min: string, max: string) => {
      const composed = `${min}~${max}`;
      const syntheticEvent = {
        ...({} as ChangeEvent<HTMLInputElement>),
        target: {
          ...({} as HTMLInputElement),
          value: composed,
        },
      };
      onChange?.(syntheticEvent);
    };

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isRange ? (
          <BaseTextBox
            {...props}
            ref={ref}
            type={textType ?? "text"}
            style={{ ...props.style }}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <BaseTextBox
              type="number"
              placeholder="min"
              value={range.min}
              onChange={(e) => {
                const min = e.target.value;
                setRange((prev) => {
                  const updated = { ...prev, min };
                  emitRangeChange(updated.min, updated.max);
                  return updated;
                });
              }}
              style={{ flex: 1 }}
            />
            <span>~</span>
            <BaseTextBox
              type="number"
              placeholder="max"
              value={range.max}
              onChange={(e) => {
                const max = e.target.value;
                setRange((prev) => {
                  const updated = { ...prev, max };
                  emitRangeChange(updated.min, updated.max);
                  return updated;
                });
              }}
              style={{ flex: 1 }}
            />
          </div>
        )}
      </ThemeProvider>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
