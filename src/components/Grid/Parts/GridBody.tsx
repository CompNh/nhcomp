import React, { useState, useMemo } from "react";
import { GridColumn, GridData, GroupRow } from "../GridTypes";
import GridBodyContextMenu from "./GridBodyContextMenu";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { isGroupRowHelper } from "../Utility/GridUtility";
import CellRenderer from "../Utility/CellRenderer";
import DefaultGridColumns from "./DefaultGridColumns";
import GroupCell from "./GroupTitle";
import {
  TableBody,
  TableRow,
  PlaceholderRow,
  PlaceholderCell
} from "../GridStyle";

interface GridBodyProps<T> {
  columns: GridColumn<T>[];
  isCellEditable?: boolean;
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
  selectedRows: Set<T>;
  onClickRow?: (row: T) => void;
  onToggleRow: (row: T) => void;
  onToggleGroupExpand: (groupKey: string) => void;
  reducer: GridReducerReturn<T>;
  style?: React.CSSProperties;
  bodyHeight: number;
}

const GridBody = <T,>({
  columns,
  showRowNumCol,
  showRowCheckboxCol,
  selectedRows,
  isCellEditable,
  onClickRow,
  onToggleRow,
  onToggleGroupExpand,
  reducer,
  style,
  bodyHeight,
}: GridBodyProps<T>) => {
  const [menuPosition, setMenuPosition] = useState<{
    x: number;
    y: number;
    row: T & { rowKey: string };
  } | null>(null);

  const ROW_HEIGHT = 35;

  const [clickedRowKey, setClickedRowKey] = useState<string | null>(null);

  // ✅ 실제 렌더될 row 수 계산 (group 펼침 고려)
  const renderedRowCount = useMemo(() => {
    const countVisibleRows = (rows: (GridData<T> | GroupRow<T>)[]): number => {
      return rows.reduce((acc, row) => {
        if (isGroupRowHelper(row)) {
          const group = row as GroupRow<T>;
          const isExpanded = reducer.state.group.expanded.has(group.__groupKey);
          return acc + 1 + (isExpanded ? countVisibleRows(group.__children as (GridData<T> | GroupRow<T>)[]) : 0);
        } else {
          return acc + 1;
        }
      }, 0);
    };

    return countVisibleRows(reducer.state.data);
  }, [reducer.state.data, reducer.state.group.expanded]);

  const placeholderHeight = Math.max(0, bodyHeight - renderedRowCount * ROW_HEIGHT);

  const handleCellDoubleClick = (rowKey: string, colKey: string, value: T[keyof T]) => {
    reducer.setEditingCell(rowKey, colKey, value);
  };

  const handleContextMenu = (event: React.MouseEvent, row: T & { rowKey: string }) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY, row });
  };

  const closeContextMenu = () => setMenuPosition(null);

  const handleCellChange = (newValue: string | boolean | Date | null) => {
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

  const renderGroupRow = (row: GroupRow<T>, level: number): React.ReactNode => {
    const isExpanded = reducer.state.group.expanded.has(row.__groupKey);
    let localRowIndex = 0;

    return (
      <React.Fragment key={row.__groupKey}>
        <GroupCell
          row={row}
          columns={columns}
          level={level}
          isExpanded={isExpanded}
          onToggleGroupExpand={onToggleGroupExpand}
          showRowNumCol={showRowNumCol}
          showRowCheckboxCol={showRowCheckboxCol}
        />
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
      <TableRow 
        key={row.rowKey} 
        onClick={()=> {
            setClickedRowKey(row.rowKey)
            onClickRow?.(row);
        }} 
        onContextMenu={(event) => 
        handleContextMenu(event, row)} 
        $isClicked={clickedRowKey === row.rowKey}>
            <DefaultGridColumns
            row={row}
            rowNum={rowNum}
            selectedRows={selectedRows}
            showRowNumCol={showRowNumCol}
            showRowCheckboxCol={showRowCheckboxCol}
            showActionColumn={showActionColumn}
            onToggleRow={onToggleRow}
            reducer={reducer}
            />
            {columns.map((col) => {
            const isEdited = reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] !== undefined;
            const isEditing =
                reducer.state.editingCell?.rowKey === row.rowKey && reducer.state.editingCell?.colKey === col.key;
            const cellValue = isEditing
                ? reducer.state.editingCell?.value
                : reducer.state.editedRows[row.rowKey]?.[col.key as keyof T] ?? row[col.key as keyof T];

            return (
                <CellRenderer
                key={col.key}
                col={col}
                row={row}
                isEditing={isEditing}
                isEdited={isEdited}
                cellValue={cellValue}
                handleCellDoubleClick={handleCellDoubleClick}
                handleCellChange={handleCellChange}
                handleKeyDown={handleKeyDown}
                isCellEditable={isCellEditable}
                cellprops={col.cellType?.cellProps}              
                />
            );
            })}
      </TableRow>
    );
  };

  return (
    <>
      <TableBody style={{ ...style }}>
        {reducer.state.data.map((row, index) =>
          isGroupRowHelper(row)
            ? renderGroupRow(row as GroupRow<T>, 0)
            : renderDataRow(row as GridData<T>, 0, index + 1)
        )}

        {placeholderHeight > 0 && (
          <PlaceholderRow>
            <PlaceholderCell
              colSpan={columns.length + (showRowNumCol ? 1 : 0) + (showRowCheckboxCol ? 1 : 0)}
              style={{ height: placeholderHeight }}
            >
              {reducer.state.originalData.length === 0 && "No data available"}
            </PlaceholderCell>
          </PlaceholderRow>
        )}
      </TableBody>

      {reducer.state.isCellEditable && (
        <GridBodyContextMenu menuPosition={menuPosition} onClose={closeContextMenu} reducer={reducer} />
      )}
    </>
  );
};

export default GridBody;
