import GridHeader from "./Parts/GridHeader";
import GridBody from "./Parts/GridBody";
import { useGridReducer } from "./Reducer/useGridReducer";
import GridPagination from "./Parts/GridPagination";
import { GridProps } from "./GridTypes";
import { setRowKeysForOrginData } from "./Utility/GridUtility";
import { gridContainer, gridTable } from "../styles/grid.css";

const Grid = <T,>({
  columns,
  data,
  options,
  showRowNumCol = true,
  showRowCheckboxCol = false,
  pagingable = false,
  pagination,
  isCellEditable = false,
}: GridProps<T>) => {
  const reducer = useGridReducer<T>(setRowKeysForOrginData(data), pagingable, pagination?.pageSize);

  const { pagenate } = reducer.state;
  const totalRows = data.length;
  const totalPages = Math.ceil(totalRows / pagenate.pageSize);
  console.log("Grid.tsx - editedRows:", reducer.state.editedRows);

  return (
    <div className={gridContainer}>        
        <table className={gridTable}>          
            <GridHeader
                columns={columns}                                
                showRowNumCol={showRowNumCol}
                showRowCheckboxCol={showRowCheckboxCol}  
                options={options}       
                reducer={reducer}   
                editedRows={reducer.state.editedRows}    
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
            />          
        </table>
        {pagingable && (
            <GridPagination
                currentPage={pagenate.currentPage}
                totalPages={totalPages}
                onPageChange={reducer.setPage} 
                totalDataCount={data.length} 
                pageSize={reducer.state.pagenate.pageSize} 
                onPageSizeChange={reducer.setPageSize}  
            />
        )}          
    </div>
  );
};

export default Grid;
