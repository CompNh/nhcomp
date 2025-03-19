import React, { ChangeEvent, useState, useEffect } from "react";
import { BaseCheckbox } from "../CommonStyle";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    apply?: boolean;
}

const CheckBox = ({      
    id,
    apply,     
    children, 
    onChange, 
    checked: propChecked, 
    ...props 
}: CheckBoxProps) => {
    const [checked, setCheck] = useState<boolean>(!!propChecked);
    // ✅ props.checked 값이 변경되면 내부 상태도 업데이트
    useEffect(() => {
        setCheck(!!propChecked);
    }, [propChecked]);

    const checkEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newChecked = !checked; // ✅ 토글된 값 저장
        setCheck(newChecked);

        if (onChange) {
            const modifiedEvent = Object.assign({}, e, {
                target: { ...e.target, checked: newChecked, rowKey : id}, // ✅ checked 값 덮어쓰기
            });
            onChange(modifiedEvent);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BaseCheckbox
                {...props}
                style={{
                    ...props.style,
                }}
                type="checkbox"
                checked={checked}
                onChange={checkEventHandler}                                                                
            >
                {children}
            </BaseCheckbox>
        </ThemeProvider>
    );
};

export default CheckBox;
