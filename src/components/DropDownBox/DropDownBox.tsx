import { useEffect, useRef } from "react";
import { DropDownBoxProps, DropDownBoxOption } from "./DropDownBoxTypes";
import useDropDownBoxReducer from "./Reducer/useDropDownBoxReducer";
import { DropDownBoxContainer, DropDownBoxItem, DropDownBoxList, StyledButton } from "./DropDownBoxStyles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import { DefualtOptionAtive, TranlateLanguage } from "./Utility/DropDownBoxOptionUtility";
import { FaChevronDown } from "react-icons/fa";

const DropDownBox = ({
    id,
    options,
    isActiveAll,
    onChange,    
    onTranslate,
    style,
    displayText,
    defualtKey
} : DropDownBoxProps) =>{   
    const reducer = useDropDownBoxReducer(DefualtOptionAtive(options, isActiveAll), defualtKey);
    const dropdownRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            reducer.setIsOpen(false);
          }
        };
    
        if (reducer.state.isOpen) {
          window.addEventListener("click", handleClickOutside);
        }
    
        return () => {
          window.removeEventListener("click", handleClickOutside);
        };
      }, [reducer.state.isOpen]);    
      
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <DropDownBoxContainer ref={dropdownRef}>
                <StyledButton id = {id} onClick={()=> reducer.setIsOpen(true)} style={{...style}}>                
                <span style={{ flexGrow: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {TranlateLanguage(reducer.state.options.find((t) => t.key === reducer.state.selectedItem?.key)?.text as string, onTranslate)}
                </span>                                  
                <FaChevronDown style={{ width: 12, height: 12, flexShrink: 0 }} />
                </StyledButton>  
                {reducer.state.isOpen && (
                    <DropDownBoxList style={{...style}}>
                        {                         
                            reducer.state.options.map((item : DropDownBoxOption)=>(
                                <DropDownBoxItem
                                    key = {item.key}
                                    onClick={()=>{
                                        reducer.selectItem(item);  
                                        onChange?.(item);
                                    }}
                                >                                    
                                    {displayText === "value" ?  
                                        TranlateLanguage(item.value as string , onTranslate) 
                                    :   TranlateLanguage(item.text as string, onTranslate) }
                                </DropDownBoxItem>    
                            ))
                        }                
                    </DropDownBoxList>
                )}          
            </DropDownBoxContainer>
        </ThemeProvider>
    )
}

export default DropDownBox