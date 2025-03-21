import { FormField } from './FormTypes';
export interface FormProps {
    title?: string;
    division: {
        row: number;
        col: number;
    };
    formFields: FormField[];
    isActivateInitialButton?: boolean;
    onSubmit?: (data: {
        [key: string]: any;
    }) => void;
    onSerach?: (data: {
        [key: string]: any;
    }) => void;
}
declare const Form: ({ title, division, formFields, isActivateInitialButton, onSubmit, onSerach }: FormProps) => import("react/jsx-runtime").JSX.Element;
export default Form;
//# sourceMappingURL=Form.d.ts.map