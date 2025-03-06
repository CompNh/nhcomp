import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

// ✅ 일반 테이블 셀 스타일 (이전 .nh-table-cell 스타일 유지)
export const tableCell = style({
  position: "relative",
  textAlign: "left",
  padding: "0.5rem",  
});

export const tableRow = style({  
  borderBottom: `1px solid ${themeVars.colorSecondHover}`,
})

// ✅ 버튼 기본 스타일
export const btn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0", // ✅ 불필요한 여백 제거
  padding: "0",
  transition: "background 0.2s ease-in-out",
});

// ✅ ✔(적용) 버튼 스타일 (파란색)
export const btnApply = style({
  backgroundColor: themeVars.colorFourth,
  color: "white",
  ":hover": {
    backgroundColor: themeVars.colorFourthHover,
  },
});

// ✅ ↩(되돌리기) 버튼 스타일 (빨간색)
export const btnReset = style({
  backgroundColor: themeVars.colorThird,
  color: "white",
  ":hover": {
    backgroundColor: themeVars.colorThirdHover,
  },
});
