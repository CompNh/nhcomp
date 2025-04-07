
import { SectionTitleWrapper, TitleBar, TitleText } from "../PageDesignerStyle";
import { SectionProps } from "../PageDesignerTypes";
import { getRandomColor } from "../Utility/PageDesigner";

const Section = ({ 
    startPosition, 
    endPosition, 
    children,
    level,
    border,
    transparent = false,
    title = undefined,     
}: SectionProps) => {
  const [startRow, startCol] = startPosition;
  const [endRow, endCol] = endPosition;

  // 랜덤 배경색 설정
  const backgroundColor = getRandomColor();

  return (
    <div
      style={{
        gridRow: `${startRow} / ${endRow + 1}`,
        gridColumn: `${startCol} / ${endCol + 1}`,
        border: border,
        background: (children || transparent) ? "transparent" : backgroundColor,
        display: "flex", 
        flexDirection: "column", // ✅ 내부 요소 세로 정렬
        width: "100%",
        height: "100%",
        padding: 0, // ✅ 내부 여백 제거
        margin: 0, // ✅ 외부 여백 제거
        overflow: "hidden", // ✅ 내부 스크롤 문제 방지
        
      }}
    >
    {title && (
      <SectionTitleWrapper>
        <TitleBar />
        <TitleText>{title}</TitleText>
      </SectionTitleWrapper>
    )}       
      {children || !transparent &&`${level}Lv [${startRow}, ${startCol}] ~ [${endRow}, ${endCol}]`}
    </div>
  );
}

export default Section;
