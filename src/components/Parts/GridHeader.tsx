import { FaLayerGroup, FaFilter, FaSortAmountUp, FaSortAmountDown, FaCheck, FaUndo } from "react-icons/fa";
import { GridColumn, GridOptions } from "../GridTypes";
import { useState } from "react";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import GridContextMenu from "./GridContextMenu";
import {
  gridHeader,
  gridHeaderRow,  
  stickyLeft,
  stickyRight,
  gridFilterRow,
  gridFilterInput,
  gridHeaderContent,
} from "../../styles/gridHeader.css"; // ✅ Vanilla Extract 스타일 import
import { btn, btnApply, btnReset, tableCell } from "../../styles/gridCommon.css";

interface GridHeaderProps<T> {
  columns: GridColumn<T>[];
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
  options?: GridOptions;
  reducer: GridReducerReturn<T>;
  editedRows: Record<string, Partial<T>>;
}

const GridHeader = <T,>({
  columns,
  showRowNumCol,
  showRowCheckboxCol,
  options,
  reducer,
  editedRows,
}: GridHeaderProps<T>) => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number; column: GridColumn<T> } | null>(null);
  const { filters, sortedColumn, sortDirection, group } = reducer.state;

  // ✅ 우클릭 이벤트 핸들러
  const handleContextMenu = (event: React.MouseEvent, column: GridColumn<T>) => {
    event.preventDefault();
    if (options) {
      setMenuPosition({ x: event.clientX, y: event.clientY, column });
    }
  };

  // ✅ 메뉴 닫기 함수
  const closeContextMenu = () => setMenuPosition(null);
  console.log(editedRows);

  return (
    <thead className={gridHeader}>
      <tr className={gridHeaderRow}>
        {/* ✅ "전체 적용(✔) / 되돌리기(↩)" 버튼 */}
        {editedRows && Object.keys(editedRows).length > 0 && (
          <th className={`${tableCell}`} style={{width : "60px"}}>
            <div style={{ display: "flex", gap: "1px", justifyContent: "center" }}>
              <button className={`${btn} ${btnApply}`} onClick={reducer.applyAllChanges}>
                <FaCheck />
              </button>
              <button className={`${btn} ${btnReset}`} onClick={reducer.resetAllChanges}>
                <FaUndo />
              </button>
            </div>
          </th>
        )}
        {showRowNumCol && <th className={tableCell} style={{width : "30px"}}>No.</th>}
        {showRowCheckboxCol && <th className={tableCell} style={{width : "30px"}}>✔</th>}

        {columns.map((col) => (
          <th
            key={col.key}
            className={`${tableCell} ${col.sticky === "left" ? stickyLeft : ""} ${
              col.sticky === "right" ? stickyRight : ""
            }`}
            style={{ width: col.width ? `${col.width}px` : "auto", textAlign: col.align || "left" }}
            title={col.tooltip}
            onContextMenu={(event) => handleContextMenu(event, col)}
          >
            <div className={gridHeaderContent}>
              <span>{col.label}</span>
              {col.sortable && sortedColumn === col.key && sortDirection !== null && (
                sortDirection === "asc" ? 
                  <FaSortAmountUp style={{ color: "#2563EB", fontSize: "14px" }} />
                  : <FaSortAmountDown style={{ color: "#2563EB", fontSize: "14px" }} />
              )}
              {group.column?.includes(col.key) && <FaLayerGroup style={{ color: "#16A34A", fontSize: "14px" }} />}
              {options?.filterable && filters[col.key] !== undefined && <FaFilter style={{ color: "#D97706", fontSize: "14px" }} />}
            </div>
          </th>
        ))}
      </tr>

      {/* ✅ 필터 입력 행 */}
      {columns.some((col) => options?.filterable && filters[col.key] !== undefined) ? (
        <tr className={gridFilterRow}>
          {showRowNumCol ? <td style={{ padding: "8px" }}>&nbsp;</td> : null}
          {showRowCheckboxCol ? <td style={{ padding: "8px" }}>&nbsp;</td> : null}
          {columns.map((col) => (
            <td key={col.key} style={{ padding: "8px" }}>
              {col.filterable && filters[col.key] !== undefined && (
                <input
                  type="text"
                  value={filters[col.key] || ""}
                  onChange={(e) => reducer.setFilter({ ...filters, [col.key]: e.target.value })}
                  className={gridFilterInput}
                  placeholder="필터 입력..."
                />
              )}
            </td>
          ))}
        </tr>
      ) : null}

      {/* ✅ 컨텍스트 메뉴 추가 */}
      {options && <GridContextMenu menuPosition={menuPosition} options={options} onClose={closeContextMenu} reducer={reducer} />}
    </thead>
  );
};

export default GridHeader;
