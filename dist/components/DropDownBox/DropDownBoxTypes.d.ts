interface DropDownBoxProps {
    id?: string;
    options: Array<DropDownBoxOption>;
    isActiveAll?: boolean;
    value?: string;
    defualtKey?: string;
    onChange?: (item: DropDownBoxOption) => void;
    onTranslate?: (item: string) => string;
    style?: React.CSSProperties;
}
interface DropDownBoxOption {
    key: string;
    value?: string;
}
export type { DropDownBoxProps, DropDownBoxOption };
//# sourceMappingURL=DropDownBoxTypes.d.ts.map