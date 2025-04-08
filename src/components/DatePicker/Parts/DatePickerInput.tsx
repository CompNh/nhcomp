import React from "react";
import { DateButton } from "../DatePickerStyle";
import { FaCalendarAlt } from "react-icons/fa";
import { theme } from "../../../styles/theme";

const DatePickerInput = React.forwardRef<HTMLButtonElement, {placeholderText? : string, value?: string; onClick?: () => void }>(
    ({ placeholderText, value, onClick }, ref) => (   
      <div style={{width: '100%'}}>
        <DateButton onClick={onClick} ref={ref}>
          {value === '' || value === undefined ? <span style={{color : theme.colors.fifth}}>{placeholderText}</span>  : value}
          <FaCalendarAlt style={{padding: '5px'}}/>
        </DateButton>      
      </div>   
    )
  );  
  export default DatePickerInput;