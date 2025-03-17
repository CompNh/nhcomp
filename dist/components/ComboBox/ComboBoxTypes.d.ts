interface ComboBoxProps {
    options: Array<ComboOption>;
    onChange?: (item: ComboOption) => void;
}
interface ComboOption {
    key: string;
    text?: string;
    color?: string;
}
export type { ComboBoxProps, ComboOption };
//# sourceMappingURL=ComboBoxTypes.d.ts.map