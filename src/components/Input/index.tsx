import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, children, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} inputIcon={!!Icon}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />

      {Icon && (
        <button type="button">
          <Icon size={27} />
        </button>
      )}

      <span>{children}</span>
    </Container>
  );
};

export default Input;
