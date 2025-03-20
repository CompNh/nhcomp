import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { DropDownBoxProps, DropDownBoxOption } from "./DropDownBoxTypes";
import useDropDownBoxReducer from "./Reducer/useDropDownBoxReducer";
import { DropDownBoxContainer, DropDownBoxItem, DropDownBoxList, StyledButton } from "./DropDownBoxStyles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import { DefualtOptionAtive, TranlateLanguage } from "./Utility/DropDownBoxOptionUtility";
import { FaChevronDown } from "react-icons/fa";

// ✅ forwardRef를 사용하여 부모에서 ref 접근 가능하게 함
const DropDownBox = forwardRef<HTMLDivElement, DropDownBoxProps>(
  ({ id, options, isActiveAll, onChange, onTranslate, style, displayText, defualtKey }, ref) => {   
    const reducer = useDropDownBoxReducer(DefualtOptionAtive(options, isActiveAll), defualtKey);
    const dropdownRef = useRef<HTMLDivElement>(null); 
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

    // ✅ useImperativeHandle을 사용해 부모에서 ref를 통해 접근 가능하도록 함
    useImperativeHandle(ref, () => dropdownRef.current as HTMLDivElement, []);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                reducer.setIsOpen(false);
            }
        };
    
        if (reducer.state.isOpen) {
            window.addEventListener("click", handleClickOutside);
    
            // ✅ 위치 업데이트를 다음 렌더링에서 반영하도록 setTimeout 사용
            setTimeout(() => {
                if (buttonRef.current) {
                    const rect = buttonRef.current.getBoundingClientRect();
                    setPosition({
                        top: rect.bottom + window.scrollY, // 버튼 아래 위치
                        left: rect.left + window.scrollX,  // 버튼과 같은 왼쪽 정렬
                        width: rect.width, // 버튼 너비와 동일하게 설정
                    });
                }
            }, 0);
        }
    
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [reducer.state.isOpen]);  
    

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <DropDownBoxContainer>
                <StyledButton 
                    ref={buttonRef}
                    id={id} 
                    onClick={() => reducer.setIsOpen(!reducer.state.isOpen)} 
                    style={{ height : "30px", ...style }}
                >                
                    <span style={{ flexGrow: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {TranlateLanguage(reducer.state.options.find((t) => t.key === reducer.state.selectedItem?.key)?.text as string, onTranslate)}
                    </span>                                  
                    <FaChevronDown style={{ width: 12, height: 12, flexShrink: 0 }} />
                </StyledButton>  

                {/* 🚀 Portal을 사용해 DropDown을 body에 렌더링 */}
                {reducer.state.isOpen && createPortal(
                    <div>
                        <DropDownBoxList 
                            ref={dropdownRef} 
                            style={{                                 
                                position: "absolute", 
                                top: `${position.top}px`, 
                                left: `${position.left}px`, 
                                width: `${position.width}px`, 
                                zIndex: 9999 
                            }}
                        >
                            {reducer.state.options.map((item: DropDownBoxOption) => (
                                <DropDownBoxItem
                                    key={item.key}
                                    onClick={() => {
                                        reducer.selectItem(item);  
                                        onChange?.(item);
                                        reducer.setIsOpen(false);
                                    }}
                                >                                    
                                    {displayText === "value" ?  
                                        TranlateLanguage(item.value as string, onTranslate) 
                                    : TranlateLanguage(item.text as string, onTranslate)}
                                </DropDownBoxItem>    
                            ))}
                        </DropDownBoxList>                        
                    </div>,
                    document.body
                )}          
            </DropDownBoxContainer>
        </ThemeProvider>
    );
});

// ✅ forwardRef를 사용하면 displayName을 설정하는 것이 좋음
DropDownBox.displayName = "DropDownBox";

export default DropDownBox;
