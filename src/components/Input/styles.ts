import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem 3.5rem;

  input {
    width: 100%;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid var(--color-gray);
    padding: 1.5rem 0;

    transition: border-color 0.4s;

    /* remove x from inptu search in IE */
    &[type='search']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    &[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* remove x from inptu search in chrome */
    &[type='search']::-webkit-search-decoration,
    &[type='search']::-webkit-search-cancel-button,
    &[type='search']::-webkit-search-results-button,
    &[type='search']::-webkit-search-results-decoration {
      display: none;
    }

    ${props =>
      props.isFocused &&
      css`
        border-color: var(--color-secondary);
      `}
  }

  svg {
    position: absolute;
    top: 3.5rem;
    right: 1.5rem;
    transition: color 0.4s;

    ${props =>
      props.isFocused &&
      css`
        color: var(--color-secondary);
      `};
  }

  span {
    font-size: 1rem;
  }
`;
