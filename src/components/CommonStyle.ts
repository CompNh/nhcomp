import { styled } from "styled-components";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px; 
  min-height: 24px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  color: ${(props) => props.theme.colors.font}; /* ✅ 테마 적용 */
  background-color: ${(props) => props.theme.colors.second}; /* ✅ 테마 적용 */

  &:hover {
    background-color: ${(props) => props.theme.colors.secondHover}; /* ✅ 테마 적용 */
    color: ${(props) => props.theme.colors.font}; /* ✅ 테마 적용 */
  }
  &:active {
    transform: scale(0.96); /* ✅ 살짝 줄이기로 클릭감 표현 */
    background-color: ${(props) => props.theme.colors.secondActive || props.theme.colors.secondHover};
  }    
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 8px;

  & > button {
    min-width: 80px;
    height: 36px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 16px;
    transition: background 0.2s ease;
  }
`;

const BaseCheckbox = styled.input.attrs({ type: "checkbox" })<{$checkedColor?: string}>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  display: inline-block;  
  opacity: 1;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 3px;
  position: relative; /* ✅ 기준점 추가! */

  &:checked {
    background-color: ${({ $checkedColor }) => $checkedColor || '#007bff'};
    border-color: ${({ $checkedColor }) => $checkedColor || '#007bff'};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 5px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg); // 체크 표시 모양
  }  
`;



const BaseTextBox = styled.input`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 8px;
  height : 30px;
  border: 1px solid ${({ theme }) => theme.colors.second};
  border-radius: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.prime};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.fourth};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.fourth};
  }
`;

const BaseLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  gap: 6px;
`;

export { 
  BaseButton,
  BaseCheckbox,
  BaseTextBox,
  BaseLabel,
  ButtonGroup
};
