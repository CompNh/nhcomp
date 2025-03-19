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
`;

const BaseCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: auto;
  display: inline-block;
  visibility: visible;
  opacity: 1;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 3px;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

const BaseTextBox = styled.input.attrs({ type: "text" })`
  width: 90%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.second};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.prime};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.fourth};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.fourth};
  }
`;


export { 
  BaseButton,
  BaseCheckbox,
  BaseTextBox
};
