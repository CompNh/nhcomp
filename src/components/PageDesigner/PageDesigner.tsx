import { useState, useEffect } from "react";
import { PageDesignerProps, SectionProps } from "./PageDesignerTypes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import React from "react";

const DEFAULT_SIZE = ["1fr", "1fr"];

const PageDesigner = ({ 
  rowSizes = DEFAULT_SIZE, 
  colSizes = DEFAULT_SIZE, 
  children, 
  gap = 10,
  border 
}: PageDesignerProps) => {
  const [dynamicRowSizes, setDynamicRowSizes] = useState(rowSizes);
  const [dynamicColSizes, setDynamicColSizes] = useState(colSizes);
  const [pageHeight, setPageHeight] = useState(window.innerHeight); // ✅ 화면 높이 상태 추가
  const [pageWidth, setPageWidth] = useState(window.innerWidth); 

  useEffect(() => {
    const handleResize = () => {
      setPageHeight(window.innerHeight); // ✅ 창 크기 변경 시 높이 업데이트
      setPageWidth(window.innerWidth);

      const width = window.innerWidth;
      if (width < 768) {
        setDynamicColSizes(["1fr"]); // 📌 모바일에서는 한 줄 레이아웃
        setDynamicRowSizes(rowSizes.map(() => "auto"));
      } else {
        setDynamicColSizes(colSizes);
        setDynamicRowSizes(rowSizes);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 로드 시 실행

    return () => window.removeEventListener("resize", handleResize);
  }, [rowSizes, colSizes]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>    
      <div
        style={{
          display: "grid",
          gridTemplateRows: dynamicRowSizes.join(" "),
          gridTemplateColumns: dynamicColSizes.join(" "),
          gap: `${gap}px`,
          width: `${pageWidth}px`,
          height: `${pageHeight}px`, // ✅ 고정된 높이 설정
          minHeight: "100vh",
          border: border,
          position: "relative",
          overflow: "hidden", // ✅ 내부에서 스크롤 제어
        }}
      >
        {React.Children?.toArray(children).filter((child) => {
            if (!React.isValidElement(child)) return false; // ✅ 유효한 React 요소인지 확인
              const [row, col] = (child.props as SectionProps).startPosition; // ✅ startPosition 추출
            return row <= dynamicRowSizes.length && col <= dynamicColSizes.length; // ✅ row, col 초과 여부 체크
        })}
      </div>
    </ThemeProvider>    
  );
};

export default PageDesigner;
