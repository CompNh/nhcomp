import { styled } from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = styled.div`
  display: block;
  align-items: center;
  position: relative;  
  width: 100%;

  .react-datepicker {
    border: 1px solid ${({ theme }) => theme.colors.second};
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.prime};
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.fourth};
    color: white;
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.third};
    color: white;
  }

  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.colors.fourthHover};
    color: white;
  }
`;


const DateButton = styled.button`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  height : 30px;
  border: 1px solid ${({ theme }) => theme.colors.second};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.prime};
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: ${({ theme }) => theme.colors.third};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.fourth};
  }

  svg {
    color: ${({ theme }) => theme.colors.font};
  }
`;

const CalendarContainer = styled.div`
  font-size: 12px; /* ✅ 기본 폰트 크기 조정 */
  
  .react-datepicker {
    border: 1px solid ${({ theme }) => theme.colors.second};
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    background: ${({ theme }) => theme.colors.prime};
  }

  .react-datepicker__header {
    background: ${({ theme }) => theme.colors.primeHover};
    padding: 4px;
  }

  .react-datepicker__day {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin: 2px;
  }

  .react-datepicker__day--selected {
    background: ${({ theme }) => theme.colors.fourth};
    color: white;
  }

  .react-datepicker__day:hover {
    background: ${({ theme }) => theme.colors.third};
    color: white;
  }
`;

export {DatePickerWrapper, DateButton, CalendarContainer}