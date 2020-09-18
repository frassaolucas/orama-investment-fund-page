import React from 'react';
import {
  MdStars,
  MdInfoOutline,
  MdDoNotDisturbAlt,
  MdReply,
} from 'react-icons/md';

import BannerImg from '../../assets/banner.jpg';

import Banner from '../../components/Banner';

import { colors } from '../../styles/global';
import { Container, BannerContent, Legends } from './styles';

const Investments: React.FC = () => {
  return (
    <Container>
      <Banner image={BannerImg}>
        <BannerContent>
          <h1>Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </BannerContent>
      </Banner>

      <Legends>
        <p>Legenda</p>

        <ul>
          <li>
            <MdStars size={20} color={colors.colorTertiary} />
            Fundo para investidor qualificado
          </li>

          <li>
            <MdInfoOutline size={20} color={colors.colorGray} />
            Entenda o resgate deste fundo
          </li>

          <li>
            <MdDoNotDisturbAlt size={20} color={colors.colorDisabled} />
            Fundo fechado para aplicação
          </li>

          <li>
            <MdReply size={20} color={colors.colorSecondary} />
            Aplicar neste fundo
          </li>
        </ul>
      </Legends>
    </Container>
  );
};

export default Investments;
