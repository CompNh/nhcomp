import React, { useEffect, useRef } from "react";
import { ContextMenuItem, GridColumn, GridOptions } from "../GridTypes";
import { GridReducerReturn } from "../Reducer/useGridReducer";
import { MdAddBox } from "react-icons/md"; // Material Icons
import { ContextDivider, ContextIcon, ContextItem, ContextMenuContainer, ContextMenuHeader, ContextMenuList } from "./ContextComp";
import { createPortal } from "react-dom";

interface GridBodyContextMenuProps<T> {  
  menuPosition: { x: number; y: number; row: T & { rowKey : string} } | null;  
  onClose: () => void;
  reducer: GridReducerReturn<T>;  
  style?: React.CSSProperties; // ✅ 사용자 스타일 직접 적용 지원
}

const GridBodyContextMenu = <T,>({
  menuPosition,  
  onClose,
  reducer,  
  style,
}: GridBodyContextMenuProps<T>) => {
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

  return createPortal(
    <ContextMenuContainer 
      ref={menuRef} 
      style={{ 
        ...style, 
        position: "absolute", 
        top: `${menuPosition.y}px`, 
        left: `${menuPosition.x}px`, 
        zIndex: 1000 
      }}
    >
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
    </ContextMenuContainer>,
    document.body // ✅ <body>에 추가하여 <table> 내부에서 벗어남!
  );
};

export default GridBodyContextMenu;
