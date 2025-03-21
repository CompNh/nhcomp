import React from "react";
import { DateButton } from "../DatePickerStyle";
import { FaCalendarAlt } from "react-icons/fa";

const DatePickerInput = React.forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (      
        <DateButton onClick={onClick} ref={ref}>
          {value === '' || value === undefined ? "날짜입력"  : value}
          <FaCalendarAlt style={{padding: '5px'}}/>
        </DateButton>      
    )
  );  
  export default DatePickerInput;