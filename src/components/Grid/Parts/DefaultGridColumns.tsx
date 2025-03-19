import { FaCheck, FaUndo } from "react-icons/fa";
import { GridData } from "../GridTypes";
import { CancelButton, ConfirmButton, TableCell } from "../GridStyle";
import CheckBox from "../../CheckBox/CheckBox";

interface DefaultGridColumnsProps<T> {
  row: GridData<T>;
  rowNum: number;
  selectedRows: Set<T>;
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
  showActionColumn?: boolean;
  onToggleRow: (row: T) => void;
  reducer: any; // ✅ 실제 타입 지정 필요
}

const DefaultGridColumns = <T,>({
  row,
  rowNum,
  selectedRows,
  showRowNumCol,
  showRowCheckboxCol,
  showActionColumn,
  onToggleRow,
  reducer,
}: DefaultGridColumnsProps<T>) => {
  return (
    <>
      {/** Row Edit Col */}
      {showActionColumn && (
        <TableCell>
          {reducer.state.editedRows[row.rowKey] && (
            <div style={{ display: "flex", gap: "1px", justifyContent: "center", alignItems: "center" }}>
              <ConfirmButton onClick={() => reducer.applyRowChanges(row.rowKey)}>
                <FaCheck size={12} />
              </ConfirmButton>
              <CancelButton onClick={() => reducer.resetRowChanges(row.rowKey)}>
                <FaUndo size={12} />
              </CancelButton>
            </div>
          )}
        </TableCell>
      )}

      {/** Row Num Col */}
      {showRowNumCol && <TableCell>{rowNum}</TableCell>}

      {/** Check Box Col */}
      {showRowCheckboxCol && (
        <TableCell>
          <CheckBox checked={selectedRows.has(row)} onChange={() => onToggleRow(row)} />
        </TableCell>
      )}
    </>
  );
};

export default DefaultGridColumns;
