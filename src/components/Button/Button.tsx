import React from "react";
import { BaseButton } from "../CommonStyle";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles/theme";

export interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    apply? : boolean;  
}

const Button: React.FC<ButtonProps> = ({ apply, children, ...props }) => {    

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />    
        <BaseButton
            {...props}
            style={{           
                ...props.style,           
            }}
        >
            {children}
        </BaseButton>
    </ThemeProvider>
    )
};

export default Button;
