import React from 'react';

import { Container } from './styles';

interface BannerProps {
  image: string;
}

const Banner: React.FC<BannerProps> = ({ image, children }) => {
  return <Container image={image}>{children}</Container>;
};

export default Banner;
