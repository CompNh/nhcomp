interface ComboBoxProps {    
    options : Array<ComboOption>;
    onChange? : (item : ComboOption) => void;
}
interface ComboOption {
    //Combo Key
    key : string,
    //Combo Value
    text? : string,
    //Color
    color? : string,    
}

export type {ComboBoxProps, ComboOption}