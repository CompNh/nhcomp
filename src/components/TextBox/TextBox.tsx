import React, {
    ChangeEvent,
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyle, theme } from "../../styles/theme";
  import { BaseTextBox } from "../CommonStyle";
  
  export interface TextBoxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
    apply?: boolean;
    textType? : "number" | "password" | "text" | "email"   
  }
  
  // ✅ forwardRef 사용
  const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
    ({ apply, 
      onChange, 
      value: propValue,
      textType,
      ...props 
    }, ref) => {
      const [value, setValue] = useState<string>(propValue ? String(propValue) : "");
  
      // ✅ props.value 변경 시 내부 상태 동기화
      useEffect(() => {
        setValue(propValue ? String(propValue) : "");
      }, [propValue]);
  
      // ✅ 입력값 변경 핸들러
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      };
  
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BaseTextBox            
            {...props}
            ref={ref} // ✅ ref 연결            
            type= {textType === undefined ? "text" : textType}
            style={{ ...props.style }}
            value={value}
            onChange={handleChange}
          />
        </ThemeProvider>
      );
    }
  );
  
  // ✅ displayName 설정 (디버깅 시 유용)
  TextBox.displayName = "TextBox";
  
  export default TextBox;
  