import React from "react";
import { LayoutProps } from "../PageDesignerTypes";
import Section from "./Section";

const DEFAULT_SIZE = ["1fr", "1fr"]; 

const Layout = ({ 
    rowSizes = DEFAULT_SIZE, 
    colSizes = DEFAULT_SIZE, 
    children, 
    gap = 10,
    border,
    level = 0,
    title = undefined,
}: LayoutProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: rowSizes.join(" "),
        gridTemplateColumns: colSizes.join(" "),
        gap: `${gap}px`,
        width: "100%",
        height: "100%",
        border: border,        
      }}
    >
      {title && (
        <div
          style={{
            marginBottom: "16px",            
            borderBottom: "1px solid #ccc",
            fontSize: "15px",
            fontWeight: 600,
            color: "#333",
          }}
        >
          {title}
        </div>
      )}      
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Section) {
          return React.cloneElement(child as React.ReactElement<any>, { level: level + 1 });
        }
        return child;
      })}
    </div>
  );
};

export default Layout
