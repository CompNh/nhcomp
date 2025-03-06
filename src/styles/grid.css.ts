import { style } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

// ✅ Grid 컨테이너 스타일
export const gridContainer = style({
  position: "relative",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: themeVars.colorBackground,
  color: themeVars.colorFont,
});

// ✅ Grid 테이블 스타일
export const gridTable = style({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: themeVars.colorBackground,
  color: themeVars.colorFont,
});
