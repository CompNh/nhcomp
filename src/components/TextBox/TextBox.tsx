import React, { ChangeEvent, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import { BaseTextBox } from "../CommonStyle";

export interface TextBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
    apply?: boolean;
}

const TextBox = ({ apply, onChange, value: propValue, ...props }: TextBoxProps) => {        
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
                style={{ ...props.style }}
                type="text"
                value={value}
                onChange={handleChange}                                
            />
        </ThemeProvider>
    );
};

export default TextBox;
