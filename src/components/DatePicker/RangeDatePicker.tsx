import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { DatePickerWrapper } from "./DatePickerStyle";
import DatePickerInput from "./Parts/DatePickerInput";

interface RangeDatePickerProps {
    startDate?: Date | null;
    endDate?: Date | null;
    onChange: (range: [Date | null, Date | null]) => void;
}

const RangeDatePicker = ({ startDate: initialStart, endDate: initialEnd, onChange }: RangeDatePickerProps) => {
    const [range, setRange] = useState<[Date | null, Date | null]>([initialStart || null, initialEnd || null]);

    return (
        <DatePickerWrapper>            
            <DatePicker
                selectsRange
                startDate={range[0]}
                endDate={range[1]}
                onChange={(update) => {
                    const newRange = update as [Date | null, Date | null];
                    setRange(newRange);
                    onChange(newRange);
                }}
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜 범위 선택"
                customInput={<DatePickerInput />}   
                popperClassName="custom-datepicker"                
                calendarContainer={(props) => <CalendarContainer {...props} />}             
            />
        </DatePickerWrapper>            
    );
};

export default RangeDatePicker;
