import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css"; // ✅ 테마 변수 가져오기

// ✅ 기본 스타일 (body, html)
globalStyle("body, html", {
  height: "100%",
  backgroundColor: themeVars.colorBackground,
  color: themeVars.colorFont,
  fontFamily: "Arial, sans-serif",
  fontSize: "12px",
  lineHeight: "1.5",
  letterSpacing: "0.5px",
  wordSpacing: "2px",
  textAlign: "left",
});

// ✅ 테이블 스타일
globalStyle(".table-th", {
  padding: "0.5rem",
  borderRight: `1px solid ${themeVars.colorPrimeHover}`,
  textAlign: "center",
  width: "2rem",
  backgroundColor: themeVars.colorSecond,
  fontWeight: "bold",
});

globalStyle(".table-td", {
  padding: "0.5rem",
  textAlign: "left",
});

globalStyle(".table-td:hover", {
  backgroundColor: themeVars.colorSecondHover,
  transition: "background-color 0.2s ease-in-out",
});

// ✅ 버튼 스타일
globalStyle(".nh-button", {
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
});

globalStyle(".nh-button:hover", {
  backgroundColor: themeVars.colorSecondHover,
});
