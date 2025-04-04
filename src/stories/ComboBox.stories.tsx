// src/stories/DropDownBox.stories.tsx
import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DropDownBox from "../components/DropDownBox/DropDownBox"; // 실제 경로에 맞게 조정
import { DropDownBoxOption } from "../components/DropDownBox/DropDownBoxTypes";

export default {
  title: "Components/DropDownBox",
  component: DropDownBox,
} as Meta<typeof DropDownBox>;

const sampleOptions: DropDownBoxOption[] = [
  { key: "1", value: "Option 1" },
  { key: "2", value: "Option 2" },
  { key: "3", value: "Option 3" },
];

const Template: StoryFn = () => {
  const [selected, setSelected] = useState<DropDownBoxOption | undefined>();

  return (
    <div style={{ padding: "20px" }}>
      <h4>선택된 값: {selected?.value || "없음"}</h4>
      <DropDownBox
        options={sampleOptions}
        onChange={(option) => {
          console.log("선택됨:", option);
          setSelected(option);
        }}
        value={selected?.key}
        isActiveAll
      />
    </div>
  );
};

export const Default = Template.bind({});
