import { ReactNode } from 'react';
interface PageDesignerProps {
    rowSizes?: string[];
    colSizes?: string[];
    children?: ReactNode;
    gap?: number;
    border?: string;
}
interface SectionProps {
    startPosition: [number, number];
    endPosition: [number, number];
    children?: React.ReactNode;
    level?: number;
    border?: string;
    transparent?: boolean;
    title?: string;
    borderBottom?: boolean;
}
interface LayoutProps {
    rowSizes?: string[];
    colSizes?: string[];
    children?: ReactNode;
    gap?: number;
    border?: string;
    level?: number;
    title?: string;
    style?: React.CSSProperties;
}
export type { PageDesignerProps, SectionProps, LayoutProps };
//# sourceMappingURL=PageDesignerTypes.d.ts.map