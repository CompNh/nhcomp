import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

// ✅ 기본 셀 스타일
export const body_tableCell = style({  
  borderBottom: `1px solid ${themeVars.colorSecondHover}`,
});


// ✅ 편집 모드 입력 필드 스타일
export const editInput = style({
  width: "100%",
  padding: "4px",
  border: `1px solid ${themeVars.colorSecond}`,
  backgroundColor: "white",
  color: "black",
  outline: "none",
  borderRadius: "4px",
});

// ✅ 그룹 행 스타일
export const groupRow = style({
  backgroundColor: themeVars.colorSecondHover,
  cursor: "pointer",
  borderBottom: `2px solid ${themeVars.colorSecond}`,
});

// ✅ 그룹 행 내부 스타일
export const groupRowContent = style({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  padding: "8px",
  gap: "8px",
});
