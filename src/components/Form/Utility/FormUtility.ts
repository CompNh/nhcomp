import { isRequired } from "../../../utils/Validate/ValidationRules";
import { FormField } from "../FormTypes";

export const validateFields = (
    formFields: FormField[],
    formData: { [key: string]: any }
  ): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};
  
    formFields.forEach((field) => {
      const value = formData[field.key];
      let error: string | undefined;
  
      // ✅ isRequired 자동 추가
      if (field.isRequired) {
        const checkRequired = isRequired(field.requiredMessage);
        error = checkRequired(value);
      }
  
      // ✅ 추가 커스텀 유효성 검사
      if (!error && field.validate) {
        error = field.validate(value);
      }
  
      if (error) {
        errors[field.key] = error;
      }
    });
  
    return errors;
  };