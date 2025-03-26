import React, {
    ChangeEvent,
    useState,
    useEffect,
    forwardRef,
    InputHTMLAttributes,
  } from "react";
  import { BaseCheckbox } from "../CommonStyle";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyle, theme } from "../../styles/theme";
  
  export interface CheckBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    apply?: boolean;
    checkedColor?: string;
    label? : string;
    labelPosition? : string; 
    labelColor? : string;
    labelSize? : string;  
    labelGap? : number;
    labelLetterSpacing? : number; 
  }
  
  const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({
    id,
    apply,
    label,
    labelPosition = "right",
    labelColor = "#333",
    labelSize = "14px",
    labelGap = 6,
    labelLetterSpacing = 1,
    children,
    onChange,
    checkedColor,
    checked: propChecked,
    ...props
  }, ref) => {
    const [checked, setCheck] = useState<boolean>(!!propChecked);
  
    useEffect(() => {
      setCheck(!!propChecked);
    }, [propChecked]);
  
    const checkEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newChecked = !checked;
      setCheck(newChecked);
  
      if (onChange) {
        const modifiedEvent = Object.assign({}, e, {
          target: { ...e.target, checked: newChecked, rowKey: id },
        });
        onChange(modifiedEvent);
      }
    };
  
    const isVertical = labelPosition === "bottom";
  
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div
          style={{
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: "center",
            gap: label ? `${labelGap}px` : undefined,
          }}
        >
          <BaseCheckbox
            {...props}
            ref={ref}
            $checkedColor={checkedColor}
            type="checkbox"
            checked={checked}
            onChange={checkEventHandler}
          />
          {label && (
            <span
              style={{
                color: labelColor,
                fontSize: labelSize,
                lineHeight: 1.3,   
                letterSpacing : labelLetterSpacing      
              }}
            >
              {label}
            </span>
          )}
        </div>
      </ThemeProvider>
    );
  });
  
  
  export default CheckBox;
  