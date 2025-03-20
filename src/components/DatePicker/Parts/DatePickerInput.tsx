import React from "react";
import { DateButton } from "../DatePickerStyle";
import { FaCalendarAlt } from "react-icons/fa";

const DatePickerInput = React.forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
      <DateButton onClick={onClick} ref={ref}>
        {value}
        <FaCalendarAlt />
      </DateButton>
    )
  );  
  export default DatePickerInput;