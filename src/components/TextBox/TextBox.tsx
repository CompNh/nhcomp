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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "value" | "onChange"> {
  apply?: boolean;
  textType?: "number" | "password" | "text" | "email" | "rangeNumber";
  value?: string | { min: number; max: number };
  onChange?: (e: {
    target: {
      value: string | { min: number; max: number };
    };
  }) => void;
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
      typeof propValue === "string" ? propValue : ""
    );

    const [range, setRange] = useState<{ min: string; max: string }>({
      min: "",
      max: "",
    });

    // ✅ 외부 value 동기화
    useEffect(() => {
      if (isRange) {
        if (typeof propValue === "object" && propValue !== null && "min" in propValue && "max" in propValue) {
          setRange({
            min: String(propValue.min),
            max: String(propValue.max),
          });
        }
      } else if (typeof propValue === "string") {
        setValue(propValue);
      }
    }, [propValue, isRange]);

    // ✅ 단일 input 변경
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setValue(newVal);
      onChange?.({ target: { value: newVal } });
    };

    // ✅ range 상태 변경 시 객체로 전달
    const prevRangeRef = useRef(range);
    useEffect(() => {
      const prev = prevRangeRef.current;
      if (range.min !== prev.min || range.max !== prev.max) {
        const min = parseFloat(range.min);
        const max = parseFloat(range.max);

        onChange?.({
          target: {
            value: {
              min: isNaN(min) ? 0 : min,
              max: isNaN(max) ? 0 : max,
            },
          },
        });

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
