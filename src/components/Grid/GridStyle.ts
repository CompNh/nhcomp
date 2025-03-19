import styled from "styled-components";
import { BaseButton } from "../CommonStyle";
// ✅ styled-components 스타일 정의
const ContextMenuContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(props) => props.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
  transform: translate(0, 5px);
`;

const ContextMenuHeader = styled.label`
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.backgroundLight || "#f3f4f6"};
  border-bottom: 1px solid ${(props) => props.theme.colors.second || "#d1d5db"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: ${(props) => props.theme.colors.text || "#374151"};
`;

const ContextMenuList = styled.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`;

const ContextItem = styled.li<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "inherit" : props.theme.colors.primeHover)};
  }
`;

const ContextDivider = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colors.second};
  margin: 4px 0;
`;

const ContextIcon = styled.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`;
const ConfirmButton = styled(BaseButton)`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.fourth}; /* ✅ 기본 배경색 */
  color: ${(props) => props.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(props) => props.theme.colors.active}; /* ✅ hover 스타일 */
  }
`;
const CancelButton = styled(BaseButton)`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.third}; /* ✅ 기본 배경색 */
  color: ${(props) => props.theme.colors.prime}; /* ✅ 기본 글자색 */

  &:hover {
    background-color: ${(props) => props.theme.colors.active}; /* ✅ hover 스타일 */
  }
`;


// ✅ Header
const HeaderWrapper = styled.thead`
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
`;

const HeaderRow = styled.tr`
  background-color: ${(props) => props.theme.colors.second};
  color: ${(props) => props.theme.colors.font};
  border-bottom: 2px solid ${(props) => props.theme.colors.font};
`;

const HeaderCell = styled.th<{ width?: number; sticky?: "left" | "right" }>`
  position: ${(props) => (props.sticky ? "sticky" : "relative")};
  ${(props) => props.sticky === "left" && `left: 0; background-color: ${props.theme.colors.prime};`}
  ${(props) => props.sticky === "right" && `right: 0; background-color: ${props.theme.colors.prime};`}
  text-align: left;
  padding: 5px;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  min-width: ${(props) => (props.width ? `${props.width}px` : "50px")};
  border-right: 1px solid ${(props) => props.theme.colors.primeHover};
  background-color: ${(props) => props.theme.colors.second};
  font-weight: bold;
`;

const FilterRow = styled.tr`
  background-color: ${(props) => props.theme.colors.primeHover};
  border-bottom: 1px solid ${(props) => props.theme.colors.font};
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${(props) => props.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

// ✅ styled-components 적용
const TableBody = styled.tbody``;

const TableRow = styled.tr`
  height: 80%;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};
`;
const TableCell = styled.td<{ $isEdited?: boolean }>`
  padding: 1px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};
  font-weight: ${(props) => (props.$isEdited ? "bold" : "normal")};
  color: ${(props) => (props.$isEdited ? props.theme.colors.third : "inherit")};
`;
// ✅ GroupTilte 정의
const GroupRowtr = styled.tr`
  background-color: ${(props) => props.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.colors.second};
`;

const GroupTableCell = styled.td`
  padding: 5px;
  font-weight: bold;
  border-bottom: 2px solid ${(props) => props.theme.colors.second};
`;

const GroupRowContent = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 8px;
  white-space: nowrap;
`;

export { 
  ContextMenuContainer, 
  ContextMenuHeader, 
  ContextMenuList, 
  ContextItem, 
  ContextDivider, 
  ContextIcon, 
  ConfirmButton, 
  CancelButton, 
  TableBody, 
  TableRow,
  GroupRowtr,
  GroupTableCell,
  GroupRowContent,
  TableCell,   
  HeaderWrapper,
  HeaderRow,
  HeaderCell,
  FilterRow,
  FilterInput,
  HeaderContent
 };