import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
    paginationContainer,
    paginationInfo,
    dropdownContainer,
    dropdownLabel,
    dropdownWrapper,
    dropdownButton,
    dropdownMenu,
    dropdownItem,
    button,
    buttonActive
} from "../../styles/paginationContainer.css"; // ✅ Vanilla Extract 스타일 import

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalDataCount: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}

const GridPagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalDataCount,
    pageSize,
    onPageChange,
    onPageSizeChange
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
        <div className={paginationContainer}>
            <span className={paginationInfo}>
                Total <b>{totalDataCount}</b> page | Page {currentPage} / {totalPages}
            </span>

            <div className={dropdownContainer}>
                <span className={dropdownLabel}>Page Size:</span>
                <div className={dropdownWrapper} ref={dropdownRef}>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                        }}
                        className={dropdownButton}
                    >
                        {pageSize}
                    </button>
                    {isOpen && (
                        <div className={dropdownMenu}>
                            {pageSizes.map((size, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        onPageSizeChange(size);
                                        setIsOpen(false);
                                    }}
                                    className={dropdownItem}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div style={{ display: "flex", gap: "4px" }}>
                <button
                    className={button}
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft size={14} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`${button} ${page === currentPage ? buttonActive : ""}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className={button}
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight size={14} />
                </button>
            </div>
        </div>
    );
};

export default GridPagination;
