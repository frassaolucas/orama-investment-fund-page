import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../styles/global';

export const Container = styled.div`
  padding: 2.5rem 1.5rem;

  background: #fff;
  border-radius: var(--border-radius);

  @media (min-width: 64em) {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  & + div {
    margin-top: 1rem;
  }

  .risk-indicator {
    @media (min-width: 64em) {
      width: 0.7rem;
      height: 100%;
      margin-left: 0;
      margin-right: 1.5rem;
      border-radius: 0;
    }
  }

  p {
    font-size: 1.2rem;
  }

  span {
    &:first-child {
      font-weight: bold;
    }
  }

  a {
    flex: 1;

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

    @media (min-width: 64em) {
      display: none;
    }
  }

  button {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 64em) {
      background: transparent;
      border: 0;
    }

    span {
      @media (min-width: 64em) {
        display: none;
      }
    }

    svg {
      margin-left: 1rem;

      @media (min-width: 64em) {
        margin-left: 0;
        color: var(--color-secondary);
      }
    }
  }
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  & + div {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  &:first-child {
    @media (min-width: 64em) {
      flex-direction: row-reverse;
    }
  }

  &:not(:first-child) {
    @media (min-width: 64em) {
      margin: 1.5rem 0 1.5rem 1.5rem;

      span {
        &:first-child {
          display: none;
        }
      }
    }
  }

  &:last-child {
    margin-top: 2rem;

    @media (min-width: 64em) {
      margin-top: 1.5rem;
      margin-right: 1.5rem;
    }
  }
`;
