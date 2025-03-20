import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer, DatePickerWrapper } from "./DatePickerStyle";
import DatePickerInput from "./Parts/DatePickerInput";
import { createPortal } from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";

export interface SingleDatePickerProps {
    selected?: Date | null;
    minDate? : Date,
    maxDate? : Date    
    onChange: (date: Date | null) => void;
};

const SingleDatePicker = ({ 
    selected,
    onChange,    
    minDate,
    maxDate,                         
}: SingleDatePickerProps) =>{
    const [selectedDate, setSelectedDate] = useState<Date | null>(selected as Date | null);    
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
    const inputRef = useRef<HTMLDivElement>(null); // ? Input 요소 참조

    useEffect(() => {
        const updatePosition = () => {
            if (inputRef.current) {
                const rect = inputRef.current.getBoundingClientRect();
                setPosition({
                    top: rect.bottom + window.scrollY, // ? 입력창 아래로 위치
                    left: rect.left + window.scrollX, // ? 입력창과 정렬
                    width: rect.width, // ? 입력창 너비와 동일하게 설정
                });
            }
        };

        updatePosition(); // ? 최초 실행
        window.addEventListener("resize", updatePosition); // ? 윈도우 크기 변경 시 재설정

        return () => {
            window.removeEventListener("resize", updatePosition); // ? 클린업
        };
    }, [selectedDate]); // ? 날짜 변경 시 위치 업데이트

    return (    
        <ThemeProvider theme={theme}>
            <GlobalStyle/>        
            <DatePickerWrapper ref={inputRef}>    
                <DatePicker               
                    selected={selectedDate}            
                    onChange={(date) => {  
                        setSelectedDate(date);              
                        onChange(date);                                
                    }}            
                    dateFormat="yyyy-MM-dd"
                    placeholderText="날짜 선택"
                    minDate={minDate} 
                    maxDate={maxDate}
                    customInput={<DatePickerInput />}   
                    popperClassName="custom-datepicker"    
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
                                {children} {/* ✅ `DatePicker`의 내부 요소를 유지 */}
                            </CalendarContainer>,
                            document.body
                        )
                    }        
                />
            </DatePickerWrapper>
        </ThemeProvider>
    )

}

export default SingleDatePicker