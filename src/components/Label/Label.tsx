import { FaInfoCircle } from "react-icons/fa";
import { BaseLabel } from "../CommonStyle";

export interface LabelProps {
  label: string;
  isRequired?: boolean;
  toolTip?: string;
  style? : React.CSSProperties
}

const Label = ({ label, isRequired, toolTip, style }: LabelProps) => {
    return (
        <BaseLabel
          style={{...style}}
        >
          <span>{label}</span>
    
          {isRequired && (
            <span style={{ color: "#ff4d4f", fontSize: "16px", lineHeight: 1 }}>*</span>
          )}
    
          {toolTip && (
            <span
              title={toolTip}
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#999",
                cursor: "help",
                fontSize: "13px",
              }}
            >
              <FaInfoCircle />
            </span>
          )}
        </BaseLabel>
      );
};

export default Label;
