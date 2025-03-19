// components/Grid/Parts/GroupCell.tsx
import React from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { GridColumn, GroupRow } from "../GridTypes";
import { GroupRowContent, GroupRowtr, GroupTableCell } from "../GridStyle";

interface GroupCellProps<T> {
  row: GroupRow<T>;
  columns: GridColumn<T>[];
  level: number;
  isExpanded: boolean;
  onToggleGroupExpand: (groupKey: string) => void;
  showRowNumCol?: boolean;
  showRowCheckboxCol?: boolean;
}

// ✅ 그룹 셀 컴포넌트
const GroupCell = <T,>({
  row,
  columns,
  level,
  isExpanded,
  onToggleGroupExpand,
  showRowNumCol,
  showRowCheckboxCol,
}: GroupCellProps<T>) => {
  const groupKey = row.__groupKey;

  return (
    <>
      <GroupRowtr onClick={() => onToggleGroupExpand(groupKey)}>
        <GroupTableCell colSpan={columns.length + (showRowNumCol ? 1 : 0) + (showRowCheckboxCol ? 1 : 0)}>
          <GroupRowContent style={{ paddingLeft: `${level * 16}px` }}>
            <span>{isExpanded ? <FaChevronDown /> : <FaChevronRight />}</span>
            <span>
              {groupKey} ({row.__children.length})
            </span>
          </GroupRowContent>
        </GroupTableCell>
      </GroupRowtr>
    </>
  );
};

export default GroupCell;
