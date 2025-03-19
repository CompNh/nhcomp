import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import GridHeader from "./Parts/GridHeader";
import GridBody from "./Parts/GridBody";
import useGridReducer from "./Reducer/useGridReducer";
import GridPagination from "./Parts/GridPagination";
import { setRowKeysForOrginData } from "./Utility/GridUtility";
import { GlobalStyle, theme } from "../../styles/theme"; // ✅ 테마 가져오기
import { GridProps } from "./GridTypes";

const GridContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background}; 
  color: ${(props) => props.theme.colors.font};
`;

const GridTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.font};
`;

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

  return (    
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
          <GridContainer>
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
