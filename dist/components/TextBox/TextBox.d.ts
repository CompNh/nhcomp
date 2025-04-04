import { default as React } from 'react';
export interface TextBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "value" | "onChange"> {
    apply?: boolean;
    textType?: "number" | "password" | "text" | "email" | "rangeNumber";
    value?: string | {
        min: number;
        max: number;
    };
    onChange?: (e: {
        target: {
            value: string | {
                min: number;
                max: number;
            };
        };
    }) => void;
}
declare const TextBox: React.ForwardRefExoticComponent<TextBoxProps & React.RefAttributes<HTMLInputElement>>;
export default TextBox;
//# sourceMappingURL=TextBox.d.ts.map