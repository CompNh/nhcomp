import { default as React, InputHTMLAttributes } from 'react';
export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    apply?: boolean;
    checkedColor?: string;
    label?: string;
    labelPosition?: string;
    labelColor?: string;
    labelSize?: string;
    labelGap?: number;
    labelLetterSpacing?: number;
}
declare const CheckBox: React.ForwardRefExoticComponent<CheckBoxProps & React.RefAttributes<HTMLInputElement>>;
export default CheckBox;
//# sourceMappingURL=CheckBox.d.ts.map