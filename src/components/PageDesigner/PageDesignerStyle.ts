import styled from 'styled-components';

const SectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const TitleBar = styled.div`
  width: 4px;
  height: 20px;
  background-color: #6366f1; // 보라색 (Tailwind 기준: indigo-500)
  border-radius: 2px;
`;

const TitleText = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

export {SectionTitleWrapper, TitleBar, TitleText}