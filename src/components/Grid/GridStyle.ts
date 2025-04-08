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

const GridContainer = styled.div`  
  width: 100%;  
  height: 100%; 
  display: flex;
  flex-direction: column;  
  background-color: ${(props) => props.theme.colors.background}; 
  color: ${(props) => props.theme.colors.font};
  overflow: hidden; 
`;

const GridTableWrapper = styled.div<{ $maxHeight?: number | null }>`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  width: 100%;  
  overflow-x: auto;
  overflow-y: auto;    
`;

const GridTable = styled.table`    
  width: 100%;
  height: 100%;
  table-layout: fixed; /* ✅ 테이블이 부모 크기에 맞춰짐 */
  border-collapse: collapse;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.font};   
  table-layout: auto; 
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
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* ✅ 스크롤 시에도 그림자로 구분 */
    
`;

const HeaderRow = styled.tr`
  background-color: ${(props) => props.theme.colors.second};
  color: ${(props) => props.theme.colors.font};  
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
  position: "sticky";
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
const TableBody = styled.tbody`
  flex-grow: 1; /* ✅ 남은 공간을 자동으로 차지 */
  overflow-y: auto;  
`;

const TableRow = styled.tr`
  height: 80%;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};  
`;
const TableCell = styled.td<{ $isEdited?: boolean }>`
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};
  font-weight: ${(props) => (props.$isEdited ? "bold" : "normal")};
  color: ${(props) => (props.$isEdited ? props.theme.colors.third : "inherit")};
  
  white-space: nowrap; /* 줄 바꿈 방지, 내용이 길면 셀 크기 증가 */
  min-width: max-content; /* 내용에 맞게 최소 크기 조정 */
  
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
const GridPaginationWrapper = styled.div`
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  height: 40px; /* ✅ GridPagination 높이 설정 */    
`;

const PlaceholderRow = styled.tr`
  pointer-events: none;
  background-color: ${(props) => props.theme.colors.background};
`;

const PlaceholderCell = styled.td`
  padding: 0;
  border: none;
  height: 100%;
  color: ${(props) => props.theme.colors.fifth};
  text-align: center;
  vertical-align: middle;
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
  HeaderContent,
  GridContainer,
  GridTable,
  GridPaginationWrapper,  
  GridTableWrapper,
  PlaceholderRow,
  PlaceholderCell
 };