interface DropDownBoxProps {    
    id? : string
    //Combo Option 값
    options : Array<DropDownBoxOption>;
    //기본값인 All 이 Option에 추가된다.
    isActiveAll? : boolean;
    // 외부 value 받기
    value?: string; 
    //Default Key
    defualtKey? : string;
    //OnChange Event
    onChange? : (item : DropDownBoxOption) => void;   
    //Translate Function
    onTranslate?: (item : string) => string;       
    //Custom Style 
    style?: React.CSSProperties;  
    
}
interface DropDownBoxOption {
    //Combo Key
    key : string,
    //value
    value? : string,          
}

export type {DropDownBoxProps, DropDownBoxOption}