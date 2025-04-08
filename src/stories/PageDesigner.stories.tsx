import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AvartarButton, Button, DropDownBox, DropDownBoxOption, DropDownBoxProps, Form, Grid, GridColumn, Layout, PageDesigner, RangeDatePicker, Section, TextBox} from "../components";
import SingleDatePicker, { SingleDatePickerProps } from "../components/DatePicker/SingleDatePicker";
import CheckBox, { CheckBoxProps } from "../components/CheckBox/CheckBox";
import { FormField } from "../components/Form/FormTypes";
import { isEmail} from "../utils/Validate/ValidationRules";
import { filterNumber } from "../utils";

export default {
  title: "Components/PageDesigner",
  component: PageDesigner,
} as Meta<typeof PageDesigner>;


interface SampleData {
    id: number;
    name: string;
    age: number;
    registered: string;
    isCheck : boolean;
    dropdown : string;
  }

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
    { key: "dropdown", label: "dropDown", width:200, cellType : {type : "DropDownBox", 
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
  
  const formFields: FormField[] = [
    { label: "이름", key: "name", position : [1,1], isRequired: true, toolTip: "이름을 입력하시오", component: <TextBox textType="rangeNumber"/> , filter : filterNumber},
    { label: "이메일", key: "email",position : [1,2], component: <TextBox textType= "email"/>, validate : isEmail() },
    { label: "비밀번호", key: "password",position : [2,1], component: <SingleDatePicker placeholderText={'날자선택'}/> },
    { label: "창고 선택", key: "warehouse",position : [2,2], component: <DropDownBox options={sampleDropData} onChange={onChanged} value="1"/> }
  ];

const Template: StoryFn<typeof PageDesigner> = (args) => (
    <PageDesigner {...args} gap={2}>
        <Section startPosition={[1, 1]} endPosition={[2, 3]}>  
        {/* <Grid<SampleData> 
                        columns={columns} 
                        data={sampleData}
                        options = {{
                            sortable: true,
                            filterable: true,
                            grouping: true,
                        }}
                        isCellEditable = {true}
                        pagingable = {true}
                        pagination = {{
                            pageSize: 10,
                            currentPage: 1,
                        }} 
                        showRowCheckboxCol = {true}                       
                        
                    />             */}
            <Layout gap={1} title = {'메롱'}
            >
                <Section startPosition={[1,1]} endPosition={[1,1]}>  
                    <Grid<SampleData> 
                        columns={columns} 
                        data={sampleData}
                        options = {{
                            sortable: true,
                            filterable: true,
                            grouping: true,
                        }}
                        isCellEditable = {true}
                        pagingable = {true}
                        pagination = {{
                            pageSize: 10,
                            currentPage: 1,
                        }} 
                        showRowCheckboxCol = {true}                       
                        
                    />                  
                </Section>
                <Section startPosition={[1,2]} endPosition={[1,2]} borderBottom={true}>
                  <Form       
                      division={{
                        row: 2,
                        col: 2
                      }}                             
                      formFields={formFields}
                      onSerach={onChanged}
                      onSubmit={onChanged}                
                  />
                </Section> 
                <Section startPosition={[2,1]} endPosition={[2,2]} title={'안녕'}>  
                  <Form                           
                        division={{
                          row: 2,
                          col: 2
                        }}                             
                        formFields={formFields}
                        onSerach={function (data: { [key: string]: any; }): void {
                          throw new Error("Function not implemented.");
                        } }
                        onSubmit={function (data: { [key: string]: any; }): void {
                          throw new Error("Function not implemented.");
                        } }                
                    />                                         
                </Section>                
            </Layout>                        
        </Section>

        <Section startPosition={[3, 1]} endPosition={[3, 2]}>          
             <AvartarButton/>
             <RangeDatePicker placeholderText="날자 범위를 선택하세요"/>
        </Section>

        <Section startPosition={[3, 3]} endPosition={[3, 3]}>
          <CheckBox 
          checkedColor="red" 
          checked = {true}
          label="그래서 뭐가 중한데이러 는것이냐"
          labelSize="10px"
          labelGap={4}
          />
          <TextBox/>
        </Section>
    </PageDesigner>
);

export const Default = Template.bind({});
Default.args = {
  rowSizes: ["1fr", "2fr", "100px"],
  colSizes: ["1fr", "3fr", "200px"],
  gap: 10,
};
