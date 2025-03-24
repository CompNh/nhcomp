import React, { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonProps } from '../Button/Button';
import { GlobalStyle, theme } from '../../styles/theme';
import { BaseButton } from '../CommonStyle';

const AvartarButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ apply, children, ...props }, ref) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseButton
          ref={ref}
          {...props}
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            ...props.style,
          }}
        >
          {children}
        </BaseButton>
      </ThemeProvider>
    );
  }
);

export default AvartarButton;
