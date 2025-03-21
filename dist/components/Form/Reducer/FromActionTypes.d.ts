import { FormState } from './FormReducer';
interface SetUpdateField {
    type: "UPDATE_FIELD";
    payload: {
        key: string;
        value: any;
    };
}
interface ResetForm {
    type: "RESET_FORM";
    defaultState: FormState;
}
type FormAction = SetUpdateField | ResetForm;
export type { FormAction, SetUpdateField, ResetForm };
//# sourceMappingURL=FromActionTypes.d.ts.map