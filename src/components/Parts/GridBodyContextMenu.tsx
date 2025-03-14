import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ContextMenuItem, GridColumn, GridOptions } from "../GridTypes";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { MdAddBox, MdDelete } from "react-icons/md"; // Material Icons
import { addRow, exportToExcel, exportToPDF } from "../Utility/GridUtility";

interface GridContextMenuProps<T> {  
  menuPosition: { x: number; y: number; row: T & { rowKey : string} } | null;  
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
  onClose,
  reducer,  
  style,
}: GridContextMenuProps<T>) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!menuPosition) return null;

  const menuItems: ContextMenuItem[] = [
    /** Row Add/Delete Support */
    {
      label: "Add Row",
      icon: <MdAddBox style={{ color: "green", fontSize: "14px" }} />,
      onClick: () => reducer.addRow(),
      
    }
    
  ].filter(Boolean) as ContextMenuItem[];

  return (
    <ContextMenuContainer ref={menuRef} style={{ ...style, top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}>
      <ContextMenuHeader>{""}</ContextMenuHeader>
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
