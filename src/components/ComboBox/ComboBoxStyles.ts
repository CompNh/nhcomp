import styled from "styled-components";
import { theme } from "../../styles/theme"; 

// ✅ Styled Components 정의
const ComboBoxContainer = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
  height: 27px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.second};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.prime};
  color: ${({ theme }) => theme.colors.font};
  width: 144px;
`;

const ComboBoxList = styled.div`
  position: absolute;
  left: 0;
  margin-top: 4px;
  width: 144px;
  border: 1px solid ${({ theme }) => theme.colors.second};
  border-radius: 6px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.prime};
  color: ${({ theme }) => theme.colors.font};
`;

const ComboBoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primeHover};
  }
`;

const Circle = styled.div<{ color?: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background: ${({ color, theme }) => color || theme.colors.background};
`;

export { ComboBoxContainer, StyledButton, ComboBoxList, ComboBoxItem, Circle };
