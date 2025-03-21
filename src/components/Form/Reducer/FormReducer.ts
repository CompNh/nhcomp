import { FormField } from "../FormTypes";
import { FormAction } from "./FromActionTypes";

interface FormState {
  [key: string]: any;
}

const initialFormState = (formFields: FormField[]): FormState => {
  return formFields.reduce((acc, field) => {
    acc[field.key] = ""; // 또는 field.defaultValue ?? ""
    return acc;
  }, {} as FormState);
};


const reducerForm = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.payload.key]: action.payload.value };

    case "RESET_FORM":
        return { ...action.defaultState }; // ✅ 폼 초기화 기능 추가  
    default:
      return state;
  }
};

export {reducerForm, initialFormState}
export type {FormState}