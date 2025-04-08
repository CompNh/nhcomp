import {
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
    forwardRef,
  } from "react";
  import DatePicker from "react-datepicker";
  import { createPortal } from "react-dom";
  import { DatePickerWrapper, CalendarContainer } from "./DatePickerStyle";
  import DatePickerInput from "./Parts/DatePickerInput";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyle, theme } from "../../styles/theme";
  
  interface RangeDatePickerProps {
    startDate?: Date | null;
    endDate?: Date | null;
    placeholderText?: string;
    onChange?: (range: [Date | null, Date | null]) => void;
  }
  
  const RangeDatePicker = forwardRef<HTMLDivElement, RangeDatePickerProps>(
    ({ startDate: initialStart, endDate: initialEnd, placeholderText, onChange }, ref) => {
      const [range, setRange] = useState<[Date | null, Date | null]>([
        initialStart || null,
        initialEnd || null,
      ]);
      const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
      });
  
      const wrapperRef = useRef<HTMLDivElement>(null);
  
      // 외부 ref로 노출
      useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement, []);
  
      useEffect(() => {
        setRange([initialStart || null, initialEnd || null]);
      }, [initialStart, initialEnd]);
  
      // 위치 계산
      useEffect(() => {
        const updatePosition = () => {
          if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            setPosition({
              top: rect.bottom + window.scrollY,
              left: rect.left + window.scrollX,
              width: rect.width,
            });
          }
        };
  
        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
      }, [range]);
  
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <DatePickerWrapper ref={wrapperRef}>
            <DatePicker
              selectsRange
              startDate={range[0]}
              endDate={range[1]}
              onChange={(update) => {
                const newRange = update as [Date | null, Date | null];
                setRange(newRange);                
                onChange?.(newRange);
              }}              
              dateFormat="yyyy-MM-dd"                            
              customInput={<DatePickerInput placeholderText = {placeholderText} />}
              popperContainer={({ children }) =>
                createPortal(
                  <CalendarContainer
                    style={{
                      position: "absolute",
                      top: `${position.top}px`,
                      left: `${position.left}px`,
                      zIndex: 9999,
                    }}
                  >
                    {children}
                  </CalendarContainer>,
                  document.body
                )
              }
            />
          </DatePickerWrapper>
        </ThemeProvider>
      );
    }
  );
  
  RangeDatePicker.displayName = "RangeDatePicker";
  
  export default RangeDatePicker;
  