import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../styles/global';

interface ButtonProps {
  borderStyle?: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 4rem;

  border-radius: var(--border-radius);
  border: 1px solid var(--color-secondary);
  background: var(--color-secondary);
  color: #fff;

  font-weight: 700;
  text-transform: uppercase;

  transition: background-color 0.4s, color 0.4s;

  ${props =>
    props.borderStyle &&
    css`
      background: transparent;
      color: var(--color-secondary);

      &:hover {
        color: #fff;
      }
    `}

  &:hover {
    background: ${shade(0.2, colors.colorSecondary)};
  }
`;
