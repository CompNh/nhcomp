interface FormField {
    label: string;
    key: string;
    position: [number, number];
    span?: {
        row: number;
        col: number;
    };
    component: React.ReactNode;
    isRequired?: boolean;
    requiredMessage?: string;
    toolTip?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    isReadOnly?: boolean;
    validate?: (value: any) => string | undefined;
}
export type { FormField };
//# sourceMappingURL=FormTypes.d.ts.map