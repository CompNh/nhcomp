import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
`;

const DropdownLabel = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.font};
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px;
  height: 24px;
  font-size: 14px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
  width: 64px;
  cursor: pointer;
  border: none;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  width: 144px;
  border: 1px solid ${(props) => props.theme.colors.second};
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.prime};
  color: ${(props) => props.theme.colors.font};
  z-index: 1000;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primeHover};
  }
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
  const pageSizes = [10, 20, 30, 50, 100];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <PaginationContainer style={style}>
      <PaginationInfo>
        Total <b>{totalDataCount}</b> items | Page {currentPage} / {totalPages}
      </PaginationInfo>

      <DropdownContainer>
        <DropdownLabel>Page Size:</DropdownLabel>
        <DropdownWrapper ref={dropdownRef}>
          <DropdownButton
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {pageSize}
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              {pageSizes.map((size, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => {
                    onPageSizeChange(size);
                    setIsOpen(false);
                  }}
                >
                  {size}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownWrapper>
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
