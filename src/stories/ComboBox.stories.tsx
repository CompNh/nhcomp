import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComboBox, ComboOption } from "../components";

const meta: Meta<typeof ComboBox> = {
  title: "Components/ComboBox",
  component: ComboBox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

// ✅ 샘플 데이터
const sampleData: ComboOption[] = [
  { key : "1" , text : "AAAA"},
  { key : "2" , text : "BBBB"},
  { key : "3" , text : "CCCC"},
];


// ✅ 기본 스토리
export const Default: Story = {
  args: {
    options : sampleData          
  },
};
