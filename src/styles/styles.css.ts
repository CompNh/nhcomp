import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

// ✅ CSS 변수 정의 (다크모드 포함)
export const themeVars = createGlobalTheme(":root", {
  colorBackground: "#F9FAFB",
  colorFont: "#111827",
  colorFontEdited: "#FF4500",
  colorPrime: "#F9FAFB",
  colorPrimeHover: "#D6D6DA",
  colorSecond: "#e3e4e6",
  colorSecondHover: "#D6D6DA",
  colorThird: "#EF4444",
  colorThirdHover: "#DC2626",
  colorFourth: "#3B82F6",
  colorFourthHover: "#2563EB",
  colorActive: "#9fd0f1",
});

// ✅ 다크 모드 설정
createGlobalTheme(".dark", {
  colorBackground: "#1E1E1E",
  colorFont: "#D4D4D4",
  colorFontEdited: "#bba529",
  colorPrime: "#2C2C2C",
  colorPrimeHover: "#4A4A4A",
  colorSecond: "#313131",
  colorSecondHover: "#464545",
  colorThird: "#F87171",
  colorThirdHover: "#DC2626",
  colorFourth: "#3B82F6",
  colorFourthHover: "#2563EB",
  colorActive: "#0883d4",
});

// ✅ 기본 스타일 적용
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

// ✅ 테이블 스타일 적용
globalStyle(".table-th", {
  padding: "0.5rem",
  borderRight: `1px solid ${themeVars.colorPrimeHover}`,
  textAlign: "center",
  width: "3rem",
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