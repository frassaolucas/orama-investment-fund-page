import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../styles/global';

export const Container = styled.div`
  padding: 2.5rem 1.5rem;

  background: #fff;
  border-radius: var(--border-radius);

  & + div {
    margin-top: 1rem;
  }

  a {
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 1rem;

    border-radius: var(--border-radius);
    border: 1px solid var(--color-secondary);
    background: transparent;
    color: var(--color-secondary);

    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    transition: background-color 0.4s, color 0.4s;

    &:hover {
      background: ${shade(0.2, colors.colorSecondary)};
      color: #fff;
    }
  }
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  &:last-child {
    margin-top: 2rem;
  }

  span {
    &:first-child {
      font-weight: bold;
    }
  }
`;
