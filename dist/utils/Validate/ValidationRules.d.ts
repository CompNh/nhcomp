export declare const isRequired: (message?: string) => (value: any) => string | undefined;
export declare const minLength: (min: number, message?: string) => (value: string) => string | undefined;
export declare const isEmail: (message?: string) => (value: string) => string | undefined;
export declare const isNumber: (message?: string) => (value: any) => string | undefined;
export declare const maxLength: (max: number, message?: string) => (value: string) => string | undefined;
export declare const isDate: (message?: string) => (value: any) => string | undefined;
export declare const isIn: (list: any[], message?: string) => (value: any) => string | undefined;
export declare const custom: (validatorFn: (value: any) => boolean, message?: string) => (value: any) => string | undefined;
//# sourceMappingURL=ValidationRules.d.ts.map