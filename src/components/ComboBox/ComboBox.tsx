import { useEffect, useRef } from "react";
import { ComboBoxProps, ComboOption } from "./ComboBoxTypes";
import useComboBoxReducer from "./Reducer/useComboBoxReducer";
import { ComboBoxContainer, ComboBoxItem, ComboBoxList, StyledButton } from "./ComboBoxStyles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";

const ComboBox = ({
    options,
    onChange    
} : ComboBoxProps) =>{   
    const reducer = useComboBoxReducer(options);
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
            <ComboBoxContainer ref={dropdownRef}>
                <StyledButton  onClick={()=> reducer.setIsOpen(true)}>                
                    {options.find((t)=>t.key === reducer.state.selectedItem?.key)?.text}                                    
                </StyledButton>  
                {reducer.state.isOpen && (
                    <ComboBoxList>
                        {
                            reducer.state.options.map((item : ComboOption)=>(
                                <ComboBoxItem
                                    key = {item.key}
                                    onClick={()=>{
                                        reducer.selectItem(item);  
                                        onChange?.(item);
                                    }}
                                >
                                    {item.text}
                                </ComboBoxItem>    
                            ))
                        }                
                    </ComboBoxList>
                )}          
            </ComboBoxContainer>
        </ThemeProvider>
    )
}

export default ComboBox