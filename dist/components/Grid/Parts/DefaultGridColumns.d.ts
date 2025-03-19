import { GridData } from '../GridTypes';
interface DefaultGridColumnsProps<T> {
    row: GridData<T>;
    rowNum: number;
    selectedRows: Set<T>;
    showRowNumCol?: boolean;
    showRowCheckboxCol?: boolean;
    showActionColumn?: boolean;
    onToggleRow: (row: T) => void;
    reducer: any;
}
declare const DefaultGridColumns: <T>({ row, rowNum, selectedRows, showRowNumCol, showRowCheckboxCol, showActionColumn, onToggleRow, reducer, }: DefaultGridColumnsProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DefaultGridColumns;
//# sourceMappingURL=DefaultGridColumns.d.ts.map