import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

export const paginationContainer = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    borderTop: `1px solid ${themeVars.colorFont}`,
    backgroundColor: themeVars.colorSecond,
});

export const paginationInfo = style({
    fontSize: "14px",
    color: themeVars.colorFont,
});

export const dropdownContainer = style({
    display: "flex",
    alignItems: "center",
    gap: "8px",
});

export const dropdownLabel = style({
    fontSize: "14px",
    color: themeVars.colorFont,
});

export const dropdownWrapper = style({
    position: "relative",
});

export const dropdownButton = style({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px",
    height: "24px",
    fontSize: "14px",
    borderRadius: "6px",
    backgroundColor: themeVars.colorPrime,
    color: themeVars.colorFont,
    width: "64px",
    cursor: "pointer",
    border: "none",
});

export const dropdownMenu = style({
    position: "absolute",
    top: "100%",
    left: "0",
    marginTop: "4px",
    width: "144px",
    border: `1px solid ${themeVars.colorSecond}`,
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: themeVars.colorPrime,
    color: themeVars.colorFont,
    zIndex: 1000,
});

export const dropdownItem = style({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "6px 12px",
    cursor: "pointer",
    ":hover": {
        backgroundColor: themeVars.colorPrimeHover,
    },
});

export const button = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    padding: "4px 8px",
    fontSize: "13px",
    fontWeight: 600,
    borderRadius: "4px",
    backgroundColor: themeVars.colorSecond,
    color: themeVars.colorFont,
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
        backgroundColor: themeVars.colorSecondHover,
    },
    ":disabled": {
        opacity: 0.5,
        cursor: "not-allowed",
    },
});

export const buttonActive = style({
    backgroundColor: themeVars.colorActive,
});
