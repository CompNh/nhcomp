import { default as React } from 'react';
import { GridColumn, GridOptions } from '../GridTypes';
import { GridReducerReturn } from '../Reducer/useGridReducer';
interface GridContextMenuProps<T> {
    menuPosition: {
        x: number;
        y: number;
        column: GridColumn<T>;
    } | null;
    options?: GridOptions;
    onClose: () => void;
    reducer: GridReducerReturn<T>;
    style?: React.CSSProperties;
}
declare const GridContextMenu: <T>({ menuPosition, options, onClose, reducer, style, }: GridContextMenuProps<T>) => import("react/jsx-runtime").JSX.Element | null;
export default GridContextMenu;
//# sourceMappingURL=GridContextMenu.d.ts.map