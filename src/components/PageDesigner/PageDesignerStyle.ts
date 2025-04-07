import styled from 'styled-components';

const LayoutTitle = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  font-weight: 600;
  color: #333;

`;
const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-bottom: 12px;  
`;

const TitleBar = styled.div`
  width: 4px;
  height: 14px;
  background-color: #6366f1; // 보라색 (Tailwind 기준: indigo-500)
  border-radius: 2px;
`;

const TitleText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export {SectionTitleWrapper, TitleBar, TitleText, LayoutTitle}