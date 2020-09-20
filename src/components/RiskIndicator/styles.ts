import styled from 'styled-components';

interface ContainerProps {
  riskColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;

  background: ${props => props.riskColor};
  border-radius: var(--border-radius);
`;
