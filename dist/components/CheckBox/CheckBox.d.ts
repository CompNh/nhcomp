import { default as React } from 'react';
export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    apply?: boolean;
}
declare const CheckBox: ({ id, apply, children, onChange, checked: propChecked, ...props }: CheckBoxProps) => import("react/jsx-runtime").JSX.Element;
export default CheckBox;
//# sourceMappingURL=CheckBox.d.ts.map