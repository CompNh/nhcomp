import { FormState } from './FormReducer';
import { FormField } from '../FormTypes';
export interface FormReducerReturn {
    state: FormState;
    setFieldValue: (payload: {
        key: string;
        value: any;
    }) => void;
    resetForm: () => void;
}
declare function useFormReducer(formFields: FormField[]): FormReducerReturn;
export default useFormReducer;
//# sourceMappingURL=useFormReducer.d.ts.map