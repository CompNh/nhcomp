import { default as React } from 'react';
import { GridColumn } from '../GridTypes';
import { GridReducerReturn } from '../Reducer/useGridReducer';
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
declare const GridBody: <T>({ columns, showRowNumCol, showRowCheckboxCol, selectedRows, isCellEditable, onClickRow, onToggleRow, onToggleGroupExpand, reducer, style, bodyHeight, }: GridBodyProps<T>) => import("react/jsx-runtime").JSX.Element;
export default GridBody;
//# sourceMappingURL=GridBody.d.ts.map