import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderStyle?: boolean;
}

const Button: React.FC<ButtonProps> = ({ borderStyle, children, ...rest }) => {
  return (
    <Container type="button" borderStyle={borderStyle} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
