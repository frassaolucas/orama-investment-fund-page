import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MdStars,
  MdInfoOutline,
  MdDoNotDisturbAlt,
  MdReply,
  MdSearch,
} from 'react-icons/md';

import api from '../../services/api';
import isEqual from '../../utils/isEqual';

import BannerImg from '../../assets/images/banner.jpg';

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import InvestmentCard, {
  InvestmentInterface,
} from '../../components/InvestmentCard';

import { colors } from '../../styles/global';
import {
  Container,
  BannerContent,
  Legends,
  InvestmentColumnHeader,
  MinimumApplicationFilter,
  RiskyFundProfileFilter,
  RedeemTimeFilter,
  StrategyFilter,
  ManagersFilter,
} from './styles';

const Investments: React.FC = () => {
  const time = useRef(0);

  const [isLoading, setIsLoading] = useState(true);
  const [investments, setInvestments] = useState([{} as InvestmentInterface]);
  const [filteredInvestment, setFilteredInvestment] = useState([
    {} as InvestmentInterface,
  ]);

  useEffect(() => {
    api.get('/').then(response => {
      setInvestments(response.data);
      setFilteredInvestment(response.data);
      setIsLoading(false);
    });
  }, []);

  const getFilteredItems = useCallback(
    (searchedValue: string) => {
      clearTimeout(time.current);

      time.current = setTimeout(() => {
        setIsLoading(true);

        const filteredItems = investments.filter(item =>
          isEqual(item.simple_name, searchedValue),
        );

        setFilteredInvestment(filteredItems);
        setIsLoading(false);
      }, [500]);
    },
    [investments],
  );

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
            <SearchInput
              type="search"
              search={event => getFilteredItems(event.target.value)}
              icon={MdSearch}
            >
              Selecione o fundo para saber o horário limite de aplicação.
            </SearchInput>
          </Card>

          <Card>
            <InvestmentColumnHeader className="show-for-large-only">
              <div className="upper-row">
                <div>Fundo</div>
                <div>Data da cota</div>
                <div>Rentabilidade(%)</div>
                <div>Aplicação mínima</div>
                <div>Cotização</div>
                <div>Aplicar</div>
              </div>

              <div className="lower-row">
                <div />
                <div>Mês</div>
                <div>{new Date().getFullYear()}</div>
                <div>12M</div>
                <div />
              </div>
            </InvestmentColumnHeader>
          </Card>

          {!isLoading && filteredInvestment.length === 0 && (
            <div className="investment-list">
              <Card>
                <div className="no-result">Nenhum resultado encontrado</div>
              </Card>
            </div>
          )}

          {!isLoading && (
            <div className="investment-list">
              {filteredInvestment.map((investment: InvestmentInterface) => (
                <Card key={String(investment.id)}>
                  <InvestmentCard investmentData={investment} />
                </Card>
              ))}
            </div>
          )}
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
