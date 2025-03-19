import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropDownBox, DropDownBoxOption } from "../components";

const meta: Meta<typeof DropDownBox> = {
  title: "Components/DropDownBox",
  component: DropDownBox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DropDownBox>;

// ✅ 샘플 데이터
const sampleData: DropDownBoxOption[] = [
  { key : "1" , text : "AAAA"},
  { key : "2" , text : "BBBB"},
  { key : "3" , text : "CCCC"},
];


// ✅ 기본 스토리
export const Default: Story = {
  args: {
    options : sampleData,     
    isActiveAll : true,    
    defualtKey : "1"
  },
};
