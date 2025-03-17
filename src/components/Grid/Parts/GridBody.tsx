import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck, FaChevronDown, FaChevronRight, FaUndo } from "react-icons/fa";
import { GridColumn, GridData, GroupRow } from "../GridTypes";
import GridBodyContextMenu from "./GridBodyContextMenu";
import { Button } from "./ContextComp";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { isGroupRowHelper } from "../Utility/GridUtility";

interface GridBodyProps<T> {
  columns: GridColumn<T>[];
  isCellEditable?: boolean;
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;  
  selectedRows: Set<T>;
  onToggleRow: (row: T) => void;
  onToggleGroupExpand: (groupKey: string) => void;
  reducer: GridReducerReturn<T>;
  style?: React.CSSProperties;
}

// ✅ styled-components 적용
const TableBody = styled.tbody``;

const TableRow = styled.tr`
  height: 80%;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};
`;

const TableCell = styled.td<{ $isEdited?: boolean }>`
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondHover};
  font-weight: ${(props) => (props.$isEdited ? "bold" : "normal")};
  color: ${(props) => (props.$isEdited ? props.theme.colors.third : "inherit")};
`;

const EditInput = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.colors.second};
  background-color: white;
  color: black;
  outline: none;
  border-radius: 4px;
`;

const GroupRowtr = styled.tr`
  background-color: ${(props) => props.theme.colors.secondHover};
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.theme.colors.second};
`;

const GroupRowContent = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  white-space: nowrap;
  padding: 8px;
  gap: 8px;
`;

const ActionCell = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
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

const GridBody = <T,>({
  columns,
  showRowNumCol,
  showRowCheckboxCol,  
  selectedRows,
  isCellEditable,
  onToggleRow,
  onToggleGroupExpand,
  reducer,
  style,
}: GridBodyProps<T>) => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number; row: T & {rowKey: string}} | null>(null);

  const handleCellDoubleClick = (rowKey: string, colKey: string, value: T[keyof T]) => {
    reducer.setEditingCell(rowKey, colKey, value);
  };

  // ✅ 컨텍스트 메뉴 핸들러 추가
  const handleContextMenu = (event: React.MouseEvent, row: T & {rowKey: string}) => {
    event.preventDefault();    
      setMenuPosition({ x: event.clientX, y: event.clientY, row });    
  };

  const closeContextMenu = () => setMenuPosition(null);

  const handleCellChange = (newValue: string) => {
    if (!reducer.state.editingCell) return;
    const { rowKey, colKey } = reducer.state.editingCell;
    reducer.setEditingCell(rowKey, colKey, newValue as T[keyof T]);

    const originalRow = reducer.state.originalData.find((row) => row.rowKey === rowKey);
    const originalValue = originalRow ? originalRow[colKey as keyof T] : undefined;

    if (originalValue !== newValue) {
      reducer.editCell(rowKey, colKey, newValue as T[keyof T]);
    } else {
      reducer.removeEditedCell(rowKey, colKey);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, row: T) => {
    if (!reducer.state.editingCell) return;
    const { rowKey, colKey } = reducer.state.editingCell;
    const columnIndex = columns.findIndex((col) => col.key === colKey);

    if (e.key === "Enter") {
      reducer.clearEditingCell();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      for (let i = columnIndex + 1; i < columns.length; i++) {
        if (columns[i].editable !== false) {
          reducer.clearEditingCell();
          reducer.setEditingCell(rowKey, columns[i].key, row[columns[i].key as keyof T]);
          return;
        }
      }
      reducer.clearEditingCell();
    }
  };

  const renderGroupRow = (row: GroupRow<T>, level: number) => {
    const groupKey = row.__groupKey;
    const isExpanded = reducer.state.group.expanded.has(groupKey);
    let localRowIndex = 0;

    return (
      <React.Fragment key={`group-${groupKey}`}>
        <GroupRowtr onClick={() => onToggleGroupExpand(groupKey)}>
          <TableCell colSpan={columns.length + (showRowNumCol ? 1 : 0) + (showRowCheckboxCol ? 1 : 0)}>
            <GroupRowContent style={{ paddingLeft: `${level * 16}px` }}>
              <span>{isExpanded ? <FaChevronDown /> : <FaChevronRight />}</span>
              <span>{groupKey} ({row.__children.length})</span>
            </GroupRowContent>
          </TableCell>
        </GroupRowtr>
        {isExpanded &&
          row.__children.map((child) =>
            isGroupRowHelper(child)
              ? renderGroupRow(child as GroupRow<T>, level + 1)
              : renderDataRow(child as GridData<T>, level + 1, ++localRowIndex)
          )}
      </React.Fragment>
    );
  };

  const renderDataRow = (row: GridData<T>, level: number, rowNum: number) => {
    const showActionColumn = Object.keys(reducer.state.editedRows).length > 0;

    return (
      <TableRow key={row.rowKey} onContextMenu={(event) => handleContextMenu(event, row)}>
        {/** Row Edit Col */}
        {showActionColumn && (
          <ActionCell>
            {reducer.state.editedRows[row.rowKey] && (
              <div style={{ display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }}>
                <Button $apply onClick={() => reducer.applyRowChanges(row.rowKey)}>
                  <FaCheck />
                </Button>
                <Button onClick={() => reducer.resetRowChanges(row.rowKey)}>
                  <FaUndo />
                </Button>
              </div>
            )}
          </ActionCell>
        )}
        {/** Row Num Col */}
        {showRowNumCol && <TableCell>{rowNum}</TableCell>}

        {/** Check Box Col*/}
        {showRowCheckboxCol && (
          <TableCell>
            <StyledCheckbox 
              type="checkbox" 
              checked={selectedRows.has(row)} 
              onChange={() => onToggleRow(row)} />
          </TableCell>
        )}

        {columns.map((col) => {
          const isEdited = reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] !== undefined;
          const isEditing = reducer.state.editingCell?.rowKey === row.rowKey && reducer.state.editingCell?.colKey === col.key;
          const cellValue = isEditing
            ? reducer.state.editingCell?.value
            : reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] ?? row[col.key as keyof T];

          return (
            <TableCell 
              key={col.key} 
              $isEdited={isEdited} 
              onDoubleClick={() => isCellEditable && handleCellDoubleClick(row.rowKey, col.key, cellValue as T[keyof T])}
            >
              {isEditing ? (
                <EditInput 
                  type="text" 
                  value={(reducer.state.editingCell?.value as string) ?? ""} 
                  onChange={(e) => handleCellChange(e.target.value)} 
                  onKeyDown={(e) => handleKeyDown(e, row)} 
                />
              ) : (
                cellValue as string
              )}
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

  return (
    <>
      <TableBody>
        {reducer.state.data.map((row, index) => 
          (isGroupRowHelper(row) ? renderGroupRow(row as GroupRow<T>, 0) : renderDataRow(row as GridData<T>, 0, index + 1)))
        }
      </TableBody>

      {reducer.state.isCellEditable && <GridBodyContextMenu 
        menuPosition={menuPosition}         
        onClose={closeContextMenu} 
        reducer={reducer} />}      
    </>
  );
};

export default GridBody;
