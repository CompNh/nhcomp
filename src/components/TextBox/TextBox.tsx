import React, {
  ChangeEvent,
  useEffect,
  useState,
  forwardRef,
  useRef,
} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";
import { BaseTextBox } from "../CommonStyle";

export interface TextBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
  apply?: boolean;
  textType?: "number" | "password" | "text" | "email" | "rangeNumber";
}

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      apply,
      onChange,
      value: propValue,
      textType,
      ...props
    }: TextBoxProps,
    ref
  ) => {
    const isRange = textType === "rangeNumber";

    const [value, setValue] = useState<string>(
      propValue ? String(propValue) : ""
    );

    const [range, setRange] = useState<{ min: string; max: string }>({
      min: "",
      max: "",
    });

    // ✅ 외부 value 동기화
    useEffect(() => {
      if (isRange) {
        const [min = "", max = ""] = String(propValue ?? "").split("~");
        setRange({ min, max });
      } else {
        setValue(propValue ? String(propValue) : "");
      }
    }, [propValue, isRange]);

    // ✅ 단일 input 변경
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setValue(newVal);
      onChange?.(e);
    };

    // ✅ range 상태가 바뀔 때 외부에 알림 (렌더 후에 실행)
    const prevRangeRef = useRef(range);
    useEffect(() => {
      const prev = prevRangeRef.current;
      if (range.min !== prev.min || range.max !== prev.max) {
        const composed = `${range.min}~${range.max}`;
        const syntheticEvent = {
          ...({} as ChangeEvent<HTMLInputElement>),
          target: {
            ...({} as HTMLInputElement),
            value: composed,
          },
        };
        onChange?.(syntheticEvent);
        prevRangeRef.current = range;
      }
    }, [range, onChange]);

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isRange ? (
          <BaseTextBox
            {...props}
            ref={ref}
            type={textType ?? "text"}
            style={{ ...props.style }}
            value={value}
            onChange={handleChange}
          />
        ) : (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <BaseTextBox
              type="number"
              placeholder="min"
              value={range.min}
              onChange={(e) => {
                const min = e.target.value;
                setRange((prev) => ({ ...prev, min }));
              }}
              style={{ flex: 1 }}
            />
            <span>~</span>
            <BaseTextBox
              type="number"
              placeholder="max"
              value={range.max}
              onChange={(e) => {
                const max = e.target.value;
                setRange((prev) => ({ ...prev, max }));
              }}
              style={{ flex: 1 }}
            />
          </div>
        )}
      </ThemeProvider>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;
