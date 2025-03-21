import { FormField } from '../FormTypes';
import { FormAction } from './FromActionTypes';
interface FormState {
    [key: string]: any;
}
declare const initialFormState: (formFields: FormField[]) => FormState;
declare const reducerForm: (state: FormState, action: FormAction) => FormState;
export { reducerForm, initialFormState };
export type { FormState };
//# sourceMappingURL=FormReducer.d.ts.map