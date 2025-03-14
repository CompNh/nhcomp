import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ContextMenuItem, GridColumn, GridOptions } from "../GridTypes";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { FaFileExcel, FaFilePdf, FaFilter, FaLayerGroup, FaSortAmountDown, FaSortAmountUp, FaTimes } from "react-icons/fa";
import { exportToExcel, exportToPDF } from "../Utility/GridUtility";

interface GridContextMenuProps<T> {  
  menuPosition: { x: number; y: number; column: GridColumn<T> } | null;
  options?: GridOptions;
  onClose: () => void;
  reducer: GridReducerReturn<T>;  
  style?: React.CSSProperties; // ✅ 사용자 스타일 직접 적용 지원
}

// ✅ styled-components 스타일 정의
const ContextMenuContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 192px;
  border: 1px solid ${(props) => props.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
  transform: translate(0, 5px);
`;

const ContextMenuHeader = styled.label`
  display: block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.backgroundLight || "#f3f4f6"};
  border-bottom: 1px solid ${(props) => props.theme.colors.second || "#d1d5db"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: ${(props) => props.theme.colors.text || "#374151"};
`;

const ContextMenuList = styled.ul`
  font-size: 14px;
  list-style: none;
  padding: 4px 0;
  margin: 0;
`;

const ContextItem = styled.li<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "inherit" : props.theme.colors.primeHover)};
  }
`;

const ContextDivider = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colors.second};
  margin: 4px 0;
`;

const ContextIcon = styled.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`;

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
