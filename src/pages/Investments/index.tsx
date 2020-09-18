import React from 'react';

import BannerImg from '../../assets/banner.jpg';

import Banner from '../../components/Banner';

import { Container, BannerContent } from './styles';

const Investments: React.FC = () => {
  return (
    <Container>
      <Banner image={BannerImg}>
        <BannerContent>
          <h1>Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </BannerContent>
      </Banner>
    </Container>
  );
};

export default Investments;
