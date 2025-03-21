import { FaInfoCircle } from "react-icons/fa";

export interface LabelProps {
  label: string;
  isRequired?: boolean;
  toolTip?: string;
}

const Label = ({ label, isRequired, toolTip }: LabelProps) => {
    return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "6px",
            fontSize: "14px",
            color: "#333",
            fontWeight: 500,
            gap: "6px",
          }}
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
        </div>
      );
};

export default Label;
