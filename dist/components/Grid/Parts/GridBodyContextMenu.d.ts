import { default as React } from 'react';
import { GridReducerReturn } from '../Reducer/useGridReducer';
interface GridBodyContextMenuProps<T> {
    menuPosition: {
        x: number;
        y: number;
        row: T & {
            rowKey: string;
        };
    } | null;
    onClose: () => void;
    reducer: GridReducerReturn<T>;
    style?: React.CSSProperties;
}
declare const GridBodyContextMenu: <T>({ menuPosition, onClose, reducer, style, }: GridBodyContextMenuProps<T>) => React.ReactPortal | null;
export default GridBodyContextMenu;
//# sourceMappingURL=GridBodyContextMenu.d.ts.map