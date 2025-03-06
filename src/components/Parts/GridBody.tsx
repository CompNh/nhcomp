import React from "react";
import { GridColumn, GridData, GroupRow } from "../GridTypes";
import { isGroupRowHelper } from "../Utility/GridUtility";
import { FaCheck, FaChevronDown, FaChevronRight, FaUndo } from "react-icons/fa";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import {
    body_tableCell,
  //tableCell,  
  editInput,
  groupRow,
  groupRowContent,
} from "../../styles/gridBody.css"; // ✅ Vanilla Extract 스타일 import
import { btn, btnApply, btnReset, tableCell, tableRow } from "../../styles/gridCommon.css";

interface GridBodyProps<T> {    
    columns: GridColumn<T>[];
    isCellEditable?: boolean;
    showRowNumCol?: boolean;
    showRowCheckboxCol?: boolean;
    selectedRows: Set<T>;
    onToggleRow: (row: T) => void;
    onToggleGroupExpand: (groupKey: string) => void;
    reducer : GridReducerReturn<T>;
}

const GridBody = <T,>({    
    columns,
    showRowNumCol = false,
    showRowCheckboxCol = false,
    selectedRows,
    isCellEditable = false,
    onToggleRow,
    onToggleGroupExpand,
    reducer,
}: GridBodyProps<T>) => {      

    const handleCellDoubleClick = (rowKey: string, colKey: string, value: T[keyof T]) => {
        reducer.setEditingCell( rowKey, colKey, value );
    };

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
        let localRowIndex : number = 0;

        return (
            <React.Fragment key={`group-${groupKey}`}>
                <tr className={groupRow} onClick={() => onToggleGroupExpand(groupKey)}>
                    <td colSpan={columns.length + (showRowNumCol ? 1 : 0) + (showRowCheckboxCol ? 1 : 0)}>
                        <div className={groupRowContent} style={{ paddingLeft: `${level * 16}px` }}>
                            <span>{isExpanded ? <FaChevronDown /> : <FaChevronRight />}</span>
                            <span>{groupKey} ({row.__children.length})</span>
                        </div>
                    </td>
                </tr>
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
        const isEditing = (colKey: string) => reducer.state.editingCell?.rowKey === row.rowKey && reducer.state.editingCell?.colKey === colKey;
        const isRowEdited = reducer.state.editedRows[row.rowKey] !== undefined;
        const showActionColumn = isCellEditable && Object.keys(reducer.state.editedRows).length > 0;

        return (
            <tr key={row.rowKey} className={tableRow}>
                {showActionColumn && (
                    <td className={`${tableCell}`}>
                        {isRowEdited && (
                            <div style={{ display: "flex", gap: "1px", justifyContent: "center" }}>
                                <button className={`${btn} ${btnApply}`} onClick={() => reducer.applyRowChanges(row.rowKey)}>
                                    <FaCheck />
                                </button>
                                <button className={`${btn} ${btnReset}`} onClick={() => reducer.resetRowChanges(row.rowKey)}>
                                    <FaUndo />
                                </button>
                            </div>
                        )}
                    </td>
                )}

                {showRowNumCol ? <td className={`${tableCell}`}>{rowNum}</td> : null}
                {showRowCheckboxCol ? (
                    <td className={`${tableCell}`}>
                        <input type="checkbox" checked={selectedRows.has(row)} onChange={() => onToggleRow(row)} />
                    </td>
                ) : null}

                {columns.map((col) => {
                    const cellValue = isEditing(col.key) 
                        ? reducer.state.editingCell?.value 
                        : reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] ?? (col.renderCell ? col.renderCell(row) : row[col.key as keyof T]);

                    return (
                        <td 
                            key={col.key}
                            className={`${tableCell}`}
                            style={{
                                paddingLeft: `${level * 16}px`,
                                fontWeight: reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] !== undefined ? "bold" : "normal",
                                color: reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] !== undefined ? "red" : "inherit",
                            }}
                            onDoubleClick={() => isCellEditable && handleCellDoubleClick(row.rowKey, col.key, cellValue as T[keyof T])}
                        >
                            {isEditing(col.key) ? (
                                <input
                                    type="text"
                                    value={reducer.state.editingCell?.value as string ?? ""}
                                    onChange={(e) => handleCellChange(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, row)}
                                    className={editInput}
                                />
                            ) : (
                                cellValue as string
                            )}
                        </td>
                    );
                })}
            </tr>
        );
    };

    return (
        <tbody>
            {reducer.state.data.map((row, index) =>
                isGroupRowHelper(row)
                    ? renderGroupRow(row as GroupRow<T>, 0)
                    : renderDataRow(row as GridData<T>, 0, index + 1)
            )}
        </tbody>
    );
};

export default GridBody;
