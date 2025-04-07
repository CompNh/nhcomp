import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropDownBoxOption, DropDownBoxProps, Grid, GridColumn } from "../components";
import Button from "../components/Button/Button";
import { CheckBoxProps } from "../components/CheckBox/CheckBox";
import { TextBoxProps } from "../components/TextBox/TextBox";
import { SingleDatePickerProps } from "../components/DatePicker/SingleDatePicker";


interface SampleData {
  id: number;
  name: string;
  age: number;
  registered: string;
  isCheck : boolean;
  dropdown : string;
}

const meta: Meta<typeof Grid<SampleData>> = {
  title: "Components/Grid",
  component: Grid,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Grid<SampleData>>;

// ✅ 샘플 데이터
const sampleData: SampleData[] = [
  { id: 1, name: "Alice", age: 25, registered: "2024-01-10", isCheck : true, dropdown : "1" },
  { id: 2, name: "Bob", age: 30, registered: "2023-05-22", isCheck : false, dropdown : "1" },
  { id: 3, name: "Charlie", age: 28, registered: "2022-08-15", isCheck : true, dropdown : "1" },
  { id: 4, name: "Alice", age: 22, registered: "2024-01-10" , isCheck : false, dropdown : "1"},
  { id: 5, name: "Bob", age: 34, registered: "2023-05-22", isCheck : false, dropdown : "1" },
  { id: 6, name: "Charlie", age: 48, registered: "2022-08-15", isCheck : true, dropdown : "1" },
  { id: 7, name: "Alice", age: 22, registered: "2024-01-10", isCheck : false, dropdown : "1" },
  { id: 8, name: "Bob", age: 34, registered: "2023-05-22", isCheck : true, dropdown : "1" },
  { id: 9, name: "Charlie", age: 48, registered: "2022-08-15", isCheck : false, dropdown : "1" },
  { id: 10, name: "Alice", age: 25, registered: "2024-01-10", isCheck : true, dropdown : "1" },
  { id: 11, name: "Bob", age: 30, registered: "2023-05-22", isCheck : false, dropdown : "1" },
  { id: 12, name: "Charlie", age: 28, registered: "2022-08-15", isCheck : true, dropdown : "1" },
  { id: 13, name: "Alice", age: 22, registered: "2024-01-10", isCheck : false, dropdown : "1" },
  { id: 14, name: "Bob", age: 34, registered: "2023-05-22", isCheck : true, dropdown : "1" },
  { id: 15, name: "Charlie", age: 48, registered: "2022-08-15", isCheck : false, dropdown : "1" },
];

const sampleDropData: DropDownBoxOption[] = [
  { key : "1" , value : "AAAA"},
  { key : "2" , value : "BBBB"},
  { key : "3" , value : "CCCC"},
];

const onChanged = (e : object) =>{
  console.log(e);
}

// ✅ 컬럼 정의
const columns: GridColumn<SampleData>[] = [
  { key: "name", label: "이름", sortable: true, filterable: true, width: 100 },
  { key: "age", label: "나이", sortable: true, filterable: true, width: 100 },
  { key: "registered", label: "가입일", sortable: true, cellType : {type : "SingleDatePicker",
    cellProps : {       
      onChange : onChanged     
    } as SingleDatePickerProps
  }},
  { key: "dropdown", label: "dropDown", cellType : {type : "DropDownBox", 
    cellProps : {
        options : sampleDropData,                
        onChange : onChanged    
  } as DropDownBoxProps}},    
  { key: "isCheck", label: "isCheck", cellType : {type : "Check", 
      cellProps : {
        onChange : onChanged 
      } as CheckBoxProps}},  
  { key: "Celltype", label: "Celltype", cellType : {type : "Button", content: "Click"}},  
  { key: "rendercell", label: "안녕", renderCell : (row) => (
    <Button onClick={() => console.log(row)}>Click Me</Button>
  ), },
];

// ✅ 기본 스토리
export const Default: Story = {
  args: {
    columns: columns,
    data: [],
    options: {
      sortable: true,
      filterable: true,
      grouping: true,
    },
    isCellEditable : true,
    pagingable: true,
    pagination: {
      pageSize: 10,
      currentPage: 1,
    },
    showRowCheckboxCol: true,            
  },
};
