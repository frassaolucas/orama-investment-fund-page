import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  search,
  icon: Icon,
  children,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} inputIcon={!!Icon}>
      <input
        onChange={search}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      {Icon && <Icon size={27} />}

      <span>{children}</span>
    </Container>
  );
};

export default Input;
