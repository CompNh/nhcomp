import { GridColumn } from "../GridTypes";
import Button from "../../Button/Button";
import CheckBox, { CheckBoxProps } from "../../CheckBox/CheckBox";
import { BaseTextBox } from "../../CommonStyle";
import TextBox, { TextBoxProps } from "../../TextBox/TextBox";
import { TableCell } from "../GridStyle";
import DropDownBox from "../../DropDownBox/DropDownBox";
import { DropDownBoxProps } from "../../DropDownBox/DropDownBoxTypes";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface CellRendererProps<T> {
    col: GridColumn<T>;
    row: T & { rowKey : string};
    isEditing: boolean;
    isEdited: boolean;
    cellValue?: T[keyof T] | Array<T>;
    cellprops? : object;
    handleCellDoubleClick: (rowKey: string, colKey: string, value: T[keyof T]) => void;
    handleCellChange: (value: string | boolean) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, row: T) => void;
    isCellEditable?: boolean;
}

/** ✅ 셀 렌더링 컴포넌트 */
const CellRenderer = <T,>({
    col,
    row,
    isEditing,
    isEdited,
    cellValue,
    handleCellDoubleClick,
    handleCellChange,
    handleKeyDown,
    isCellEditable,
    cellprops,
}: CellRendererProps<T>) => {    
    const isColEditable = col.editable ?? row[col.key as keyof T] !== undefined;    

    return (
        <TableCell
            $isEdited={isEdited}
            onDoubleClick={() => (isCellEditable && isColEditable) && handleCellDoubleClick(row.rowKey, col.key, cellValue as T[keyof T] )}
        >
            {isEditing ? (                
                /* ✅ cellType이 있으면 자동 UI 적용 */
                col.cellType 
                    ? renderCellByType(
                        col, 
                        row, 
                        cellprops as object, 
                        handleCellChange,
                        handleKeyDown, 
                        true, 
                        cellValue
                    ) 
                    : <BaseTextBox
                        type="text"
                        value={cellValue as string}
                        onChange={(e) => handleCellChange(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, row)}
                    />
            ) : col.renderCell ? (
                /* ✅ renderCell이 있으면 실행 (사용자 정의 UI) */                
                col.renderCell(row)
            ) : col.cellType ? (
                /* ✅ cellType이 있으면 자동 UI 적용 */
                renderCellByType(
                    col,
                    row, 
                    cellprops as object, 
                    handleCellChange, 
                    handleKeyDown, 
                    false, 
                    cellValue
                )
            ) : (
                /* ✅ 기본값 렌더링 */
                cellValue as string
            )}
        </TableCell>
    );
};




/** ✅ cellType에 따라 기본 UI 자동 처리 */
const renderCellByType = <T,>(
    col: GridColumn<T>, 
    row: T & { rowKey : string}, 
    props: object, 
    handleCellChange: (value: string | boolean) => void,
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, row: T) => void,
    isEditing: boolean, // ✅ 추가: isEditing 상태에 따라 다르게 렌더링
    cellValue?: T[keyof T] | Array<T>
) => {
    switch (col.cellType?.type) {
        case "Button":
            return isEditing 
                ? <Button disabled>{col.cellType.content}</Button> 
                : <Button id={row.rowKey}>{col.cellType.content}</Button>;        

        case "Check":
            return isEditing 
                ? <CheckBox 
                        id={row.rowKey} 
                        {...props as CheckBoxProps} 
                        checked={Boolean(cellValue)}                         
                        onChange={(e) => {                                                 
                            handleCellChange(e.target.checked)
                            const fakeEvent = new KeyboardEvent("keydown", { key: "Enter" });
                            handleKeyDown(fakeEvent as unknown as React.KeyboardEvent<HTMLInputElement>, row);                                
                        }}
                   />
                : /*수정 모드가 아닐 경우 Check Icon, 수정모드 완료시 완본 UnChecked 된경우 Unchecked 표시*/                
                  Boolean(cellValue) ? <FaCheck/> : cellValue !== row[col.key as keyof T] ? "UnChecked" : ""

        case "DropDownBox":
            const [defaultValue, setDefaultValue] = useState((row as Record<string, any>)[col.key])
            
            return isEditing
                ? <DropDownBox 
                    id={row.rowKey} 
                    {...props as DropDownBoxProps} 
                    style={{ zIndex: 50 }}            
                    defualtKey={defaultValue}
                    onChange={(e)=> {
                        handleCellChange(e.key);
                        setDefaultValue(e.key);
                        const fakeEvent = new KeyboardEvent("keydown", { key: "Enter" });
                        handleKeyDown(fakeEvent as unknown as React.KeyboardEvent<HTMLInputElement>, row);                                                                
                    }}
                    />
                : <>{(props as DropDownBoxProps).options.find((t)=>t.key === cellValue as string)?.text}</>;

        default:
            return <>{row[col.key as keyof T] as string}</>;
    }
};

export default CellRenderer;