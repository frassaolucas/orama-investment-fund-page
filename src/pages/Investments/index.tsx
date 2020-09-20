import React, { useEffect, useState } from 'react';
import {
  MdStars,
  MdInfoOutline,
  MdDoNotDisturbAlt,
  MdReply,
  MdSearch,
} from 'react-icons/md';

import api from '../../services/api';

import BannerImg from '../../assets/images/banner.jpg';

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Input from '../../components/Input';
import InvestmentCard, {
  InvestmentInterface,
} from '../../components/InvestmentCard';

import { colors } from '../../styles/global';
import {
  Container,
  BannerContent,
  Legends,
  MinimumApplicationFilter,
  RiskyFundProfileFilter,
  RedeemTimeFilter,
  StrategyFilter,
  ManagersFilter,
} from './styles';

const Investments: React.FC = () => {
  const [investments, setInvestments] = useState([{} as InvestmentInterface]);

  useEffect(() => {
    api.get('/').then(response => {
      setInvestments(response.data);
    });
  }, []);

  return (
    <Container>
      <Banner image={BannerImg}>
        <BannerContent>
          <h1>Fundos de Investimento</h1>
          <p>Conheça a nossa lista de fundos</p>
        </BannerContent>
      </Banner>

      <div className="grid-x">
        <div className="cell large-9">
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
        </div>
      </div>

      <div className="grid-x grid-padding-x">
        <div className="cell large-9">
          <Card>
            <Input type="search" icon={MdSearch}>
              Selecione o fundo para saber o horário limite de aplicação.
            </Input>
          </Card>

          <div className="investment-list">
            {investments.map((investment: InvestmentInterface) => (
              <Card key={String(investment.id)}>
                <InvestmentCard investmentData={investment} />
              </Card>
            ))}
          </div>
        </div>

        <div className="cell large-3 show-for-large-only">
          <Card>
            <MinimumApplicationFilter>
              Filter Aplicação mínima
            </MinimumApplicationFilter>
          </Card>

          <Card>
            <RiskyFundProfileFilter>
              Filtro Perfil de risco de fundo
            </RiskyFundProfileFilter>
          </Card>

          <Card>
            <RedeemTimeFilter>Filtro Prazo de resgate</RedeemTimeFilter>
          </Card>

          <StrategyFilter>Filtrar por estratégias</StrategyFilter>

          <ManagersFilter>Filtrar por gestores</ManagersFilter>
        </div>
      </div>
    </Container>
  );
};

export default Investments;
