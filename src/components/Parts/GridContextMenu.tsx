import React, { useEffect, useRef } from "react";
import { ContextMenuItem, GridColumn, GridOptions } from "../GridTypes";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { FaFileExcel, FaFilePdf, FaFilter, FaLayerGroup, FaSortAmountDown, FaSortAmountUp, FaTimes } from "react-icons/fa";
import { exportToExcel, exportToPDF } from "../Utility/GridUtility";
import { ContextDivider, ContextIcon, ContextItem, ContextMenuContainer, ContextMenuHeader, ContextMenuList } from "./ContextComp";

interface GridContextMenuProps<T> {  
  menuPosition: { x: number; y: number; column: GridColumn<T> } | null;
  options?: GridOptions;
  onClose: () => void;
  reducer: GridReducerReturn<T>;  
  style?: React.CSSProperties; // ✅ 사용자 스타일 직접 적용 지원
}
const GridContextMenu = <T,>({
  menuPosition,
  options,
  onClose,
  reducer,  
  style,
}: GridContextMenuProps<T>) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { filters, sortedColumn, sortDirection, group, activeExportSurport } = reducer?.state;


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!menuPosition || !options) return null;

  const menuItems: ContextMenuItem[] = [
    /** Export Support */
    activeExportSurport &&{
      label: "Excel Export",
      icon: <FaFileExcel style={{ color: "green", fontSize: "14px" }} />,
      onClick: () => exportToExcel(reducer?.state.originalData),
      
    },
    activeExportSurport &&{
      label: "PDF Export",
      icon: <FaFilePdf style={{ color: "red", fontSize: "14px" }} />,
      onClick: () => exportToPDF(reducer?.state.originalData),
    },
    activeExportSurport && { divider: true },

    /** Sort Part */
    options.sortable && menuPosition.column.sortable && {
      label: options.contextMenuLabels?.sortAsc || "오름차순 정렬",            
      icon: <FaSortAmountUp style={{ color: "#2563EB", fontSize: "14px" }} />,
      onClick: () => reducer?.setSort(menuPosition.column.key, "asc"), 
      disabled : sortedColumn === menuPosition.column.key && sortDirection === "asc"
           
    },
    options.sortable && menuPosition.column.sortable && {
      label: options.contextMenuLabels?.sortDesc || "내림차순 정렬",
      icon: <FaSortAmountDown style={{ color: "#2563EB", fontSize: "14px" }} />,
      onClick: () => reducer?.setSort(menuPosition.column.key, "desc"),
      disabled : sortedColumn === menuPosition.column.key && sortDirection === "desc"
    },
    options.sortable && menuPosition.column.sortable && {
      label: options.contextMenuLabels?.clearSort || "정렬 해제",
      icon: <FaTimes style={{ color: "#DC2626", fontSize: "14px" }} />,
      onClick: () => reducer?.setSort('', null),
      disabled : sortedColumn !== menuPosition.column.key
    },
    options.sortable && menuPosition.column.sortable && options.grouping && { divider: true },

    /** Group Part */
    options.grouping && {
      label: options.contextMenuLabels?.group || "그룹화",
      icon: <FaLayerGroup style={{ color: "#16A34A", fontSize: "14px" }} />,
      onClick: () => reducer?.setGroup(menuPosition.column.key),
      disabled : Array.isArray(group?.column) && group.column.includes(menuPosition.column.key)

    },
    options.grouping && {
      label: options.contextMenuLabels?.ungroup || "그룹 해제",
      icon: <FaTimes style={{ color: "#DC2626", fontSize: "14px" }} />,
      onClick: () => reducer?.removeGroup(menuPosition.column.key),
      disabled : Array.isArray(group?.column) && !group.column.includes(menuPosition.column.key)
    },
    (options.grouping || options.sortable) && options.filterable && menuPosition.column.filterable && { divider: true },

    /** Filter Part */
    options.filterable && menuPosition.column.filterable && {
      label: options.contextMenuLabels?.filter || "필터",
      icon: <FaFilter style={{ color: "#D97706", fontSize: "14px" }} />,
      onClick: () => reducer?.setFilter({ [menuPosition.column.key]: "" }),
      disabled : Array.isArray(filters?.column) && filters.column.includes(menuPosition.column.key)
    },
    options.filterable && menuPosition.column.filterable && {
      label: options.contextMenuLabels?.clearFilter || "필터 해제",
      icon: <FaTimes style={{ color: "#DC2626", fontSize: "14px" }} />,
      onClick: () => reducer?.clearFilter(menuPosition.column.key),
      disabled : Array.isArray(filters?.column) && !filters.column.includes(menuPosition.column.key)
    },
  ].filter(Boolean) as ContextMenuItem[];

  return (
    <ContextMenuContainer ref={menuRef} style={{ ...style, top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}>
      <ContextMenuHeader>{menuPosition.column.label}</ContextMenuHeader>
      <ContextMenuList>           
        {menuItems.map((item, index) =>
          item.divider ? (
            <ContextDivider key={`divider-${index}`} />
          ) : (
            <ContextItem
              key={index}
              disabled={item.disabled}
              onClick={() => {
                if (!item.disabled && item.onClick) item.onClick();
                onClose();
              }}              
            >
              {item.icon && <ContextIcon>{item.icon}</ContextIcon>}              
              <span>{item.label}</span>
            </ContextItem>
          )
        )}
      </ContextMenuList>
    </ContextMenuContainer>
  );
};

export default GridContextMenu;
