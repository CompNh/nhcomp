import { ThemeProvider } from "styled-components";
import GridHeader from "./Parts/GridHeader";
import GridBody from "./Parts/GridBody";
import useGridReducer from "./Reducer/useGridReducer";
import GridPagination from "./Parts/GridPagination";
import { setRowKeysForOrginData } from "./Utility/GridUtility";
import { GlobalStyle, theme } from "../../styles/theme"; // ✅ 테마 가져오기
import { GridProps } from "./GridTypes";
import { GridContainer, GridTable, GridTableWrapper} from "./GridStyle";
import { useLayoutEffect, useRef, useState } from "react";

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
}: GridProps<T>) => {
  const reducer = useGridReducer<T>(setRowKeysForOrginData(data), pagingable, pagination?.pageSize, activeExportSurport, isCellEditable);
  const { pagenate } = reducer.state;
  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / pagenate.pageSize);

  const containerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const parentHeight = containerRef.current.parentElement?.clientHeight || 500;
      setMaxHeight(parentHeight - 40); // ✅ 초기 높이 저장 (Pagination 높이 제외)
    }
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    reducer.clearEditingCell();    
  };

  return (    
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <GridContainer ref={containerRef}>
              <GridTableWrapper $maxHeight={maxHeight} onScroll={handleScroll}>
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
