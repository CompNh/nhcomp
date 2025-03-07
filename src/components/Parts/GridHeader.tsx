import styled from "styled-components";
import { FaLayerGroup, FaFilter, FaSortAmountUp, FaSortAmountDown, FaCheck, FaUndo } from "react-icons/fa";
import { GridColumn, GridOptions } from "../GridTypes";
import { useState } from "react";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import GridContextMenu from "./GridContextMenu";

interface GridHeaderProps<T> {
  columns: GridColumn<T>[];
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
  options?: GridOptions;
  reducer: GridReducerReturn<T>;
  editedRows: Record<string, Partial<T>>;
  style?: React.CSSProperties;
}

// ✅ styled-components 적용
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

const Button = styled.button<{ apply?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  background-color: ${(props) => (props.apply ? props.theme.colors.fourth : props.theme.colors.third)};
  color: white;

  &:hover {
    background-color: ${(props) => (props.apply ? props.theme.colors.fourthHover : props.theme.colors.thirdHover)};
  }
`;

const GridHeader = <T,>({
  columns,
  showRowNumCol,
  showRowCheckboxCol,
  options,
  reducer,
  editedRows,
  style,
}: GridHeaderProps<T>) => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number; column: GridColumn<T> } | null>(null);
  const { filters, sortedColumn, sortDirection, group } = reducer.state;

  // ✅ 컨텍스트 메뉴 핸들러 추가
  const handleContextMenu = (event: React.MouseEvent, column: GridColumn<T>) => {
    event.preventDefault();
    if (options) {
      setMenuPosition({ x: event.clientX, y: event.clientY, column });
    }
  };

  const closeContextMenu = () => setMenuPosition(null);

  return (
    <HeaderWrapper style={style}>
      <HeaderRow>
        {editedRows && Object.keys(editedRows).length > 0 && (
          <HeaderCell width={40}>
            <div style={{ display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }}>
              <Button apply onClick={reducer.applyAllChanges}>
                <FaCheck />
              </Button>
              <Button onClick={reducer.resetAllChanges}>
                <FaUndo />
              </Button>
            </div>
          </HeaderCell>
        )}
        {showRowNumCol && <HeaderCell width={40}>No.</HeaderCell>}
        {showRowCheckboxCol && <HeaderCell width={40}>✔</HeaderCell>}
        {columns.map((col) => (
          <HeaderCell key={col.key} width={col.width} sticky={col.sticky} onContextMenu={(event) => handleContextMenu(event, col)}>
            <HeaderContent>
              <span>{col.label}</span>
              {col.sortable && sortedColumn === col.key && sortDirection !== null && (
                sortDirection === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />
              )}
              {group.column?.includes(col.key) && <FaLayerGroup />}
              {options?.filterable && filters[col.key] !== undefined && <FaFilter />}
            </HeaderContent>
          </HeaderCell>
        ))}
      </HeaderRow>

      {columns.some((col) => options?.filterable && filters[col.key] !== undefined) && (
        <FilterRow>
          {showRowNumCol && <td style={{ padding: "8px" }}>&nbsp;</td>}
          {showRowCheckboxCol && <td style={{ padding: "8px" }}>&nbsp;</td>}
          {columns.map((col) => (
            <td key={col.key} style={{ padding: "8px" }}>
              {col.filterable && filters[col.key] !== undefined && (
                <FilterInput
                  type="text"
                  value={filters[col.key] || ""}
                  onChange={(e) => reducer.setFilter({ ...filters, [col.key]: e.target.value })}
                  placeholder="필터 입력..."
                />
              )}
            </td>
          ))}
        </FilterRow>
      )}

      {options && <GridContextMenu menuPosition={menuPosition} options={options} onClose={closeContextMenu} reducer={reducer} />}
    </HeaderWrapper>
  );
};

export default GridHeader;
