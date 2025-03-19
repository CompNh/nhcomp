import { default as React } from 'react';
export interface TextBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
    apply?: boolean;
}
declare const TextBox: ({ apply, onChange, value: propValue, ...props }: TextBoxProps) => import("react/jsx-runtime").JSX.Element;
export default TextBox;
//# sourceMappingURL=TextBox.d.ts.map