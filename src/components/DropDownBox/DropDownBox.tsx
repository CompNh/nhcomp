import {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import { createPortal } from "react-dom";
  import {
    DropDownBoxProps,
    DropDownBoxOption,
  } from "./DropDownBoxTypes";
  import useDropDownBoxReducer from "./Reducer/useDropDownBoxReducer";
  import {
    DropDownBoxContainer,
    DropDownBoxItem,
    DropDownBoxList,
    StyledButton,
  } from "./DropDownBoxStyles";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyle, theme } from "../../styles/theme";
  import {
    DefualtOptionAtive,
    TranlateLanguage,
  } from "./Utility/DropDownBoxOptionUtility";
  import { FaChevronDown } from "react-icons/fa";
  
  const DropDownBox = forwardRef<HTMLDivElement, DropDownBoxProps>(
    (
      {
        id,
        options,
        isActiveAll,
        value,
        onChange,
        onTranslate,
        style,        
        defualtKey,
      },
      ref
    ) => {
      const reducer = useDropDownBoxReducer(
        DefualtOptionAtive(options, isActiveAll),
        defualtKey
      );
  
      const dropdownRef = useRef<HTMLDivElement>(null);
      const buttonRef = useRef<HTMLButtonElement>(null);
      const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
      });
  
      // ✅ 외부 value → 내부 상태 반영
      useEffect(() => {
        if (value !== undefined) {
          const selected = reducer.state.options.find((opt) => opt.key === value);
          if (selected) {
            reducer.selectItem(selected);
          }else{
            reducer.selectItem(undefined);
          }
        }
      }, [value, reducer.state.options]);
  
      // ✅ Portal 위치 계산
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
  
          setTimeout(() => {
            if (buttonRef.current) {
              const rect = buttonRef.current.getBoundingClientRect();
              setPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
              });
            }
          }, 0);
        }
  
        return () => {
          window.removeEventListener("click", handleClickOutside);
        };
      }, [reducer.state.isOpen]);
  
      useImperativeHandle(ref, () => dropdownRef.current as HTMLDivElement, []);
  
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <DropDownBoxContainer>
            <StyledButton
              ref={buttonRef}
              id={id}
              onClick={() => reducer.setIsOpen(!reducer.state.isOpen)}
              style={{ height: "30px", ...style }}
            >
              <span
                style={{
                  flexGrow: 1,
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {TranlateLanguage(
                  reducer.state.selectedItem?.value ?? "",
                  onTranslate
                )}
              </span>
              <FaChevronDown style={{ width: 12, height: 12, flexShrink: 0 }} />
            </StyledButton>
  
            {reducer.state.isOpen &&
              createPortal(
                <div>
                  <DropDownBoxList
                    ref={dropdownRef}
                    style={{
                      position: "absolute",
                      top: `${position.top}px`,
                      left: `${position.left}px`,
                      width: `${position.width}px`,
                      zIndex: 9999,
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
                        {TranlateLanguage(
                          item.value as string,
                          onTranslate
                        )}
                      </DropDownBoxItem>
                    ))}
                  </DropDownBoxList>
                </div>,
                document.body
              )}
          </DropDownBoxContainer>
        </ThemeProvider>
      );
    }
  );
  
  DropDownBox.displayName = "DropDownBox";
  
  export default DropDownBox;
  