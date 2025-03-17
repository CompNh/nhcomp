import { ComboOption } from "../ComboBoxTypes";

interface SetOptions {
    type : "SET_OPTIONS";
    options : Array<ComboOption>
}

interface SelectItem {
    type : "SELECT_ITEM";
    item : ComboOption;
    isOpen : boolean
}
interface SetIsOpen {
    type : "SET_IS_OPEN";
    isOpen : boolean;    
}


type ComboBoxAction =
    |SetOptions
    |SelectItem
    |SetIsOpen    

export type {
    ComboBoxAction,
    SetOptions,
    SelectItem,
    SetIsOpen,    
}