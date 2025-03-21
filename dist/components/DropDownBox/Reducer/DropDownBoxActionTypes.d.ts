import { DropDownBoxOption } from '../DropDownBoxTypes';
interface SetOptions {
    type: "SET_OPTIONS";
    options: Array<DropDownBoxOption>;
}
interface SelectItem {
    type: "SELECT_ITEM";
    item?: DropDownBoxOption;
    isOpen: boolean;
}
interface SetIsOpen {
    type: "SET_IS_OPEN";
    isOpen: boolean;
}
type DropDownBoxAction = SetOptions | SelectItem | SetIsOpen;
export type { DropDownBoxAction, SetOptions, SelectItem, SetIsOpen, };
//# sourceMappingURL=DropDownBoxActionTypes.d.ts.map