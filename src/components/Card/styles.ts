import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: var(--border-radius);

  & + div {
    margin-top: 1rem;
  }
`;
