import { GridColumn } from '../GridTypes';
interface CellRendererProps<T> {
    col: GridColumn<T>;
    row: T & {
        rowKey: string;
    };
    isEditing: boolean;
    isEdited: boolean;
    cellValue?: T[keyof T] | Array<T>;
    cellprops?: object;
    handleCellDoubleClick: (rowKey: string, colKey: string, value: T[keyof T]) => void;
    handleCellChange: (value: string | boolean) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, row: T) => void;
    isCellEditable?: boolean;
}
/** ✅ 셀 렌더링 컴포넌트 */
declare const CellRenderer: <T>({ col, row, isEditing, isEdited, cellValue, handleCellDoubleClick, handleCellChange, handleKeyDown, isCellEditable, cellprops, }: CellRendererProps<T>) => import("react/jsx-runtime").JSX.Element;
export default CellRenderer;
//# sourceMappingURL=CellRenderer.d.ts.map