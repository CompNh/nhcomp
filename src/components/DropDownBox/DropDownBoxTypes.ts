interface DropDownBoxProps {    
    id? : string
    //Combo Option 값
    options : Array<DropDownBoxOption>;
    //기본값인 All 이 Option에 추가된다.
    isActiveAll : boolean;
    //Default Key
    defualtKey : string;
    //OnChange Event
    onChange? : (item : DropDownBoxOption) => void;   
    //Translate Function
    onTranslate?: (item : string) => string;   
    //보여질 Text 의 값 (defualt : text)
    displayText : "text" | "value";    
    //Custom Style 
    style?: React.CSSProperties;  
    
}
interface DropDownBoxOption {
    //Combo Key
    key : string,
    //Combo text
    text? : string,
    //value
    value? : string,          
}

export type {DropDownBoxProps, DropDownBoxOption}