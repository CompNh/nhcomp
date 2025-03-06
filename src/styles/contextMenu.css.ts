import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

export const contextMenu = style({
    position: "fixed",
    zIndex: 9999,
    width: "192px",
    border: `1px solid ${themeVars.colorSecond}`,
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: themeVars.colorPrime,
    color: themeVars.colorFont,
    transform: "translate(0, 5px)",
});

export const contextMenuList = style({
    fontSize: "14px",
    listStyle: "none",
    padding: "4px 0",
    margin: 0,
});

export const contextItem = style({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 12px",
    cursor: "pointer",
    ":hover": {
        backgroundColor: themeVars.colorPrimeHover,
    },
});

export const contextDisabled = style({
    opacity: 0.5,
    cursor: "not-allowed",
});

export const contextDivider = style({
    borderTop: `1px solid ${themeVars.colorSecond}`,
    margin: "4px 0",
});

export const contextIcon = style({
    display: "flex",
    alignItems: "center",
    width: "20px",
    height: "20px",
});
