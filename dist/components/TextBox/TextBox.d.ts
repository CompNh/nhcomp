import { default as React } from 'react';
export interface TextBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
    apply?: boolean;
    textType?: "number" | "password" | "text" | "email" | "rangeNumber";
}
declare const TextBox: React.ForwardRefExoticComponent<TextBoxProps & React.RefAttributes<HTMLInputElement>>;
export default TextBox;
//# sourceMappingURL=TextBox.d.ts.map