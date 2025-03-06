import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

// ✅ GridHeader 컨테이너 스타일
export const gridHeader = style({
  backgroundColor: themeVars.colorPrime,
  color: themeVars.colorFont,
});

// ✅ 헤더 행 스타일
export const gridHeaderRow = style({
  backgroundColor: themeVars.colorSecond,
  color: themeVars.colorFont,
  borderBottom: `2px solid ${themeVars.colorFont}`,
});

// ✅ 왼쪽 고정 셀 스타일
export const stickyLeft = style({
  position: "sticky",
  left: 0,
  backgroundColor: themeVars.colorPrime,
});

// ✅ 오른쪽 고정 셀 스타일
export const stickyRight = style({
  position: "sticky",
  right: 0,
  backgroundColor: themeVars.colorPrime,
});

// ✅ 필터 행 스타일
export const gridFilterRow = style({
  backgroundColor: themeVars.colorPrimeHover,
  borderBottom: `1px solid ${themeVars.colorFont}`,
});

// ✅ 필터 입력 스타일
export const gridFilterInput = style({
  width: "100%",
  padding: "4px 8px",
  border: `1px solid ${themeVars.colorSecond}`,
  backgroundColor: "white",
  color: "black",
  outline: "none",
  borderRadius: "4px",
});

// ✅ 헤더 내부 아이콘 정렬
export const gridHeaderContent = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});
