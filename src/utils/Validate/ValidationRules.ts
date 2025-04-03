export const isRequired = (message = "필수 입력 항목입니다.") => (value: any) =>
value ? undefined : message;

export const minLength = (min: number, message?: string) => (value: string) =>
value?.length >= min ? undefined : message || `${min}자 이상 입력해주세요`;

export const isEmail = (message = "이메일 형식이 올바르지 않습니다.") => (value: string) =>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : message;

export const isNumber = (message = "숫자만 입력 가능합니다.") => (value: any) =>
    value === undefined || value === null || value === ''
      ? undefined
      : isNaN(Number(value))
      ? message
      : undefined;

export const maxLength = (max: number, message?: string) => (value: string) =>
    value?.length <= max ? undefined : message || `${max}자 이하로 입력해주세요`;

export const isDate = (message = "유효한 날짜 형식이 아닙니다.") => (value: any) =>
    value instanceof Date && !isNaN(value.getTime()) ? undefined : message;

export const isIn = (list: any[], message = "허용되지 않은 값입니다.") => (value: any) =>
    list.includes(value) ? undefined : message;

export const custom = (validatorFn: (value: any) => boolean, message = "유효하지 않은 값입니다.") => 
    (value: any) => validatorFn(value) ? undefined : message;
