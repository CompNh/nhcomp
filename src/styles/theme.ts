import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
      background: "#F9FAFB",
      font: "#111827",
      fontEdited: "#FF4500",
      prime: "#F9FAFB",
      primeHover: "#D6D6DA",
      second: "#e3e4e6",
      secondHover: "#D6D6DA",
      third: "#EF4444",
      thirdHover: "#DC2626",
      fourth: "#3B82F6",
      fourthHover: "#2563EB",
      active: "#9fd0f1",
    },
};

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.font};
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    word-spacing: 2px;
    text-align: left;
    visibility: visible;
  }
`;