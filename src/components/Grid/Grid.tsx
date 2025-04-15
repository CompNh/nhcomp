import { ThemeProvider } from "styled-components";
import GridHeader from "./Parts/GridHeader";
import GridBody from "./Parts/GridBody";
import useGridReducer from "./Reducer/useGridReducer";
import GridPagination from "./Parts/GridPagination";
import { setRowKeysForOrginData } from "./Utility/GridUtility";
import { GlobalStyle, theme } from "../../styles/theme";
import { GridProps } from "./GridTypes";
import {
  GridContainer,
  GridTable,
  GridTableWrapper,
} from "./GridStyle";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Grid = <T,>({
  columns,
  data,
  options,
  showRowNumCol = true,
  showRowCheckboxCol = false,
  pagingable = false,
  pagination,
  isCellEditable = false,
  customStyles = {},
  activeExportSurport,
  onRowSelected    
}: GridProps<T>) => {
  const reducer = useGridReducer<T>(
    setRowKeysForOrginData(data),
    pagingable,
    pagination?.pageSize,
    activeExportSurport,
    isCellEditable    
  );
  const { pagenate } = reducer.state;
  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / pagenate.pageSize);

  const containerRef = useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  useEffect(() => {
    reducer.resetData(setRowKeysForOrginData(data));
  }, [data]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateHeight = () => {      
      const totalHeight = containerRef.current?.clientHeight || 0;
      const HEADER_HEIGHT = 40;
      const PAGINATION_HEIGHT = pagingable ? 40 : 0;
      const available = totalHeight - HEADER_HEIGHT - PAGINATION_HEIGHT;
      setBodyHeight(available > 0 ? available : 0);
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);

    updateHeight(); // 초기

    return () => observer.disconnect();
  }, [pagingable]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    reducer.clearEditingCell();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GridContainer ref={containerRef}>
        <GridTableWrapper onScroll={handleScroll}>
          <GridTable>
            <GridHeader
              columns={columns}
              showRowNumCol={showRowNumCol}
              showRowCheckboxCol={showRowCheckboxCol}
              options={options}
              reducer={reducer}
              editedRows={reducer.state.editedRows}
              style={customStyles.header}
            />
            <GridBody
              reducer={reducer}
              columns={columns}
              isCellEditable={isCellEditable}
              showRowNumCol={showRowNumCol}
              showRowCheckboxCol={showRowCheckboxCol}
              selectedRows={reducer.state.selectedRows}
              onToggleRow={reducer.toggleRow}
              onToggleGroupExpand={reducer.expandGroup}
              style={customStyles.body}
              bodyHeight={bodyHeight} 
              onClickRow={onRowSelected}
            />
          </GridTable>
        </GridTableWrapper>

        {pagingable && (
          <GridPagination
            currentPage={pagenate.currentPage}
            totalPages={totalPages}
            onPageChange={reducer.setPage}
            totalDataCount={data.length}
            pageSize={reducer.state.pagenate.pageSize}
            onPageSizeChange={reducer.setPageSize}
            style={customStyles.pagination}
          />
        )}
      </GridContainer>
    </ThemeProvider>
  );
};

export default Grid;
