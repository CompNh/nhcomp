import { createGlobalTheme } from "@vanilla-extract/css";

// ✅ 기본 테마 변수
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

// ✅ 다크 모드 변수
export const darkThemeVars = createGlobalTheme(".dark", {
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
