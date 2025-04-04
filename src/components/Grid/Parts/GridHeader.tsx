import { FaLayerGroup, FaFilter, FaSortAmountUp, FaSortAmountDown, FaCheck, FaUndo } from "react-icons/fa";
import { GridColumn, GridOptions } from "../GridTypes";
import { useState } from "react";
import GridContextMenu from "./GridContextMenu";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { CancelButton, ConfirmButton, FilterInput, FilterRow, HeaderCell, HeaderContent, HeaderRow, HeaderWrapper } from "../GridStyle";

interface GridHeaderProps<T> {
  columns: GridColumn<T>[];
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
  options?: GridOptions;
  reducer: GridReducerReturn<T>;
  editedRows: Record<string, Partial<T>>;
  style?: React.CSSProperties;
}

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
    <>
    <HeaderWrapper style={style}>
      <HeaderRow>
        {/** Row Edit Col */}
        {editedRows && Object.keys(editedRows).length > 0 && (          
          <HeaderCell width={40}>            
            <div style={{ display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }}>
              <ConfirmButton onClick={reducer.applyAllChanges}>
                <FaCheck />
              </ConfirmButton>
              <CancelButton onClick={reducer.resetAllChanges}>
                <FaUndo />
              </CancelButton>
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
                sortDirection === "asc" ? <FaSortAmountUp style={{ color: "#2563EB", fontSize: "10px" }}/> : <FaSortAmountDown style={{ color: "#2563EB", fontSize: "10px" }}/>
              )}
              {group.column?.includes(col.key) && <FaLayerGroup style={{ color: "#16A34A", fontSize: "10px" }}/>}
              {options?.filterable && filters[col.key] !== undefined && <FaFilter style={{ color: "#D97706", fontSize: "10px" }}/>}
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
    </HeaderWrapper>
    {options && <GridContextMenu 
        menuPosition={menuPosition} 
        options={options} 
        onClose={closeContextMenu} 
        reducer={reducer} />}
    </>    
  );
};

export default GridHeader;
