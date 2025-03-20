import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DropDownBox from "../../DropDownBox/DropDownBox";
import { DropDownBoxOption, DropDownBoxProps } from "../../DropDownBox/DropDownBoxTypes";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalDataCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;  
  style?: React.CSSProperties; // ✅ 사용자 스타일 직접 적용 지원
}

// ✅ styled-components 스타일 정의
const PaginationContainer = styled.div`  
  flex-shrink: 0; /* ✅ GridPagination이 항상 하단에 고정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${(props) => props.theme.colors.font};
  background-color: ${(props) => props.theme.colors.second};
`;

const PaginationInfo = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.font};
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: visible;
`;

const DropdownLabel = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.font};
`;


const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? props.theme.colors.active : props.theme.colors.second)};
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondHover};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const GridPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalDataCount,
  pageSize,
  onPageChange,
  onPageSizeChange,  
  style,
}) => {  
  const pageSizes: DropDownBoxOption[] = [
    { key : "10" , text : "10"},
    { key : "20" , text : "20"},
    { key : "30" , text : "30"},
  ];

  return (
    <PaginationContainer style={style}>
      <PaginationInfo>
        Total <b>{totalDataCount}</b> items | Page {currentPage} / {totalPages}
      </PaginationInfo>

      <DropdownContainer>
        <DropdownLabel>Page Size:</DropdownLabel>
        <DropDownBox         
          options={pageSizes}
          defualtKey={String(pageSize)}  
          style={{width : 80}}      
          onChange={(item)=>{
            onPageSizeChange(parseInt(item.text as string, 10));
          }}
        />
      </DropdownContainer>
      <div style={{ display: "flex", gap: "4px" }}>
        <Button onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <FaChevronLeft size={14} />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button key={page} $active={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </Button>
        ))}

        <Button onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <FaChevronRight size={14} />
        </Button>
      </div>
    </PaginationContainer>
  );
};

export default GridPagination;
