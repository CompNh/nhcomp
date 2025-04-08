import {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import DatePicker from "react-datepicker";
  import { createPortal } from "react-dom";
  import {
    CalendarContainer,
    DatePickerWrapper,
  } from "./DatePickerStyle";
  import DatePickerInput from "./Parts/DatePickerInput";
  import { ThemeProvider } from "styled-components";
  import { GlobalStyle, theme } from "../../styles/theme";
  
  export interface SingleDatePickerProps {
    value?: Date | null;
    minDate?: Date;
    maxDate?: Date;
    placeholderText? : string;
    onChange?: (date: Date | null) => void;
  }
  
  const SingleDatePicker = forwardRef<HTMLDivElement, SingleDatePickerProps>(
    ({ value, onChange, minDate, maxDate, placeholderText }, ref) => {
      const [selectedDate, setSelectedDate] = useState<Date | null>(value ?? null);
      const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  
      const wrapperRef = useRef<HTMLDivElement>(null);
  
      // ✅ 외부 selected 값 변화 → 내부 반영
      useEffect(() => {
        setSelectedDate(value ?? null);
      }, [value]);
  
      // ✅ 위치 계산
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
      }, [selectedDate]);
  
      // ✅ ref 외부 노출
      useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement, []);
  
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <DatePickerWrapper ref={wrapperRef}>
            <DatePicker              
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                onChange?.(date);
              }}
              wrapperClassName="w-full"
              dateFormat="yyyy-MM-dd"
              placeholderText="날짜 선택"
              minDate={minDate}
              maxDate={maxDate}
              customInput={<DatePickerInput placeholderText= {placeholderText} />}              
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
  
  SingleDatePicker.displayName = "SingleDatePicker";
  
  export default SingleDatePicker;
  