import styled from 'styled-components';

interface BannerProps {
  image: string;
}

export const Container = styled.div<BannerProps>`
  background: url(${props => props.image});
`;
