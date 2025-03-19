import { GridColumn, GroupRow } from '../GridTypes';
interface GroupCellProps<T> {
    row: GroupRow<T>;
    columns: GridColumn<T>[];
    level: number;
    isExpanded: boolean;
    onToggleGroupExpand: (groupKey: string) => void;
    showRowNumCol?: boolean;
    showRowCheckboxCol?: boolean;
}
declare const GroupCell: <T>({ row, columns, level, isExpanded, onToggleGroupExpand, showRowNumCol, showRowCheckboxCol, }: GroupCellProps<T>) => import("react/jsx-runtime").JSX.Element;
export default GroupCell;
//# sourceMappingURL=GroupTitle.d.ts.map