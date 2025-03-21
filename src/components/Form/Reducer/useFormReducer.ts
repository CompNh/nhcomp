import { useReducer } from "react";
import { FormState, initialFormState, reducerForm } from "./FormReducer";
import { FormField } from "../FormTypes";

export interface FormReducerReturn {
  state: FormState;
  setFieldValue: (payload : {key :string, value : any}) => void;
  resetForm: () => void;
}

function useFormReducer(formFields: FormField[]): FormReducerReturn {
    const [state, dispatch] = useReducer(reducerForm, initialFormState(formFields));
  
    const setFieldValue = (payload : {key :string, value : any}) => {
      dispatch({ type: "UPDATE_FIELD", payload });
    };
  
    const resetForm = () => {
      dispatch({ type: "RESET_FORM", defaultState: initialFormState(formFields) });
    };
  
    return {
      state,
      setFieldValue,
      resetForm,
    };
  }
  
  export default useFormReducer;
