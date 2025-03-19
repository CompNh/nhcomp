interface DropDownBoxProps {
    id?: string;
    options: Array<DropDownBoxOption>;
    isActiveAll?: boolean;
    defualtKey?: string;
    onChange?: (item: DropDownBoxOption) => void;
    onTranslate?: (item: string) => string;
    displayText?: "text" | "value";
    style?: React.CSSProperties;
}
interface DropDownBoxOption {
    key: string;
    text?: string;
    value?: string;
}
export type { DropDownBoxProps, DropDownBoxOption };
//# sourceMappingURL=DropDownBoxTypes.d.ts.map