import { ReactNode } from "react";
interface PageDesignerProps {
  rowSizes?: string[]; // 각 행 크기 (예: ["1fr", "2fr", "100px"])
  colSizes?: string[]; // 각 열 크기 (예: ["1fr", "3fr", "200px"])
  children?: ReactNode;
  gap?: number;  
  border? : string;
};

interface SectionProps {
  startPosition: [number, number]; // (row, col) 시작 위치
  endPosition: [number, number]; // (row, col) 끝 위치
  children?: React.ReactNode;
  level?: number;
  border? : string;
};

interface LayoutProps {
  rowSizes?: string[];
  colSizes?: string[];
  children?: ReactNode;
  gap?: number;
  border? : string;
  level?: number;
};

export type {PageDesignerProps, SectionProps, LayoutProps}
  