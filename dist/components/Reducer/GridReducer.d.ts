import { GridData, GridGroupState, GridPaginationProps, SortDirection } from '../GridTypes';
import { GridAction } from './GridActionTypes';
/** 🔹 Grid 상태 타입 정의 */
interface GridState<T> {
    /** 원본 Data */
    originalData: GridData<T>[];
    /** 반영 Data */
    data: GridData<T>[];
    /** 정렬된 컬럼 */
    sortedColumn: string | null;
    /** 정렬 방향 */
    sortDirection: SortDirection;
    /** 컬럼별 필터 상태 */
    filters: Record<string, string>;
    /** 그룹핑된 컬럼 목록 */
    group: GridGroupState;
    /** 선택된 Row 목록 */
    selectedRows: Set<T>;
    /** 페이지 활성화 */
    pagingable?: boolean;
    /** 현재 페이지 */
    pagenate: GridPaginationProps;
    /** 수정된 Data 관리 */
    editedRows: Record<string, Partial<T>>;
    /** 현재 편집 중인 셀 */
    editingCell: {
        rowKey: string;
        colKey: string;
        value: T[keyof T];
    } | null;
}
/** 🔹 초기 상태 값 */
declare const initialGridState: <T>(data: T[], pagingable: boolean, pageSize: number) => GridState<T>;
/** 🔹 Grid 리듀서 함수 */
declare function gridReducer<T>(state: GridState<T>, action: GridAction<T>): GridState<T>;
export { gridReducer, initialGridState };
export type { GridState };
//# sourceMappingURL=GridReducer.d.ts.map