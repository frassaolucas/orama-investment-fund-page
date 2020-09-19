import React from 'react';
import {
  MdStars,
  MdInfoOutline,
  MdDoNotDisturbAlt,
  MdReply,
  MdSearch,
} from 'react-icons/md';

import BannerImg from '../../assets/images/banner.jpg';

import Banner from '../../components/Banner';
import Input from '../../components/Input';
import InvestmentCard from '../../components/InvestmentCard';

import { colors } from '../../styles/global';
import {
  Container,
  BannerContent,
  Legends,
  Search,
  InvestmentList,
} from './styles';

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

      <Search>
        <Input type="search" icon={MdSearch}>
          Selecione o fundo para saber o horário limite de aplicação.
        </Input>
      </Search>

      <InvestmentList>
        <InvestmentCard />
        <InvestmentCard />
      </InvestmentList>
    </Container>
  );
};

export default Investments;
