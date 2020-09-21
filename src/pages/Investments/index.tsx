import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MdStars,
  MdInfoOutline,
  MdDoNotDisturbAlt,
  MdReply,
  MdSearch,
} from 'react-icons/md';

import api from '../../services/api';
import stringIsEqual from '../../utils/stringIsEqual';
import riskIsEqual from '../../utils/riskIsEqual';

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
  RiskProfile,
} from './styles';

const Investments: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [investments, setInvestments] = useState([{} as InvestmentInterface]);
  const [filteredInvestment, setFilteredInvestment] = useState([
    {} as InvestmentInterface,
  ]);
  const [searchFields, setSearchFields] = useState({
    searchedInputs: '',
    risk: 0,
  });

  const time = useRef(0);

  useEffect(() => {
    api.get('/').then(response => {
      setInvestments(response.data);
      setFilteredInvestment(response.data);
      setIsLoading(false);
    });
  }, []);

  const applyFilter = useCallback(() => {
    let filteredItems = investments;

    console.log(filteredItems);
    console.log(searchFields);

    if (searchFields.searchedInputs.length > 0) {
      filteredItems = filteredItems.filter(item =>
        stringIsEqual(item.simple_name, searchFields.searchedInputs),
      );
      console.log('filtrou busca');
    }

    if (searchFields.risk !== 0) {
      filteredItems = filteredItems.filter(item => {
        const risk = item.specification?.fund_risk_profile?.score_range_order;
        return riskIsEqual(risk, searchFields.risk);
      });
      console.log('filtrou risk');
    }

    console.log(`depois:`);
    console.log(filteredItems);

    setFilteredInvestment(filteredItems);
  }, [investments, searchFields]);

  useEffect(() => {
    applyFilter();
  }, [searchFields, applyFilter]);

  const searchInvestment = (searchedValue: string) => {
    clearTimeout(time.current);

    time.current = setTimeout(() => {
      setIsLoading(true);

      setSearchFields({ ...searchFields, searchedInputs: searchedValue });

      setIsLoading(false);
    }, 500);
  };

  const filterRisk = useCallback(
    (searchedValue: string) => {
      clearTimeout(time.current);

      const searchedRisk = Number(searchedValue);

      time.current = setTimeout(() => {
        setIsLoading(true);

        setSearchFields({ ...searchFields, risk: searchedRisk });

        setIsLoading(false);
      }, [500]);
    },
    [searchFields],
  );

  return (
    <Container>
      <Banner image={BannerImg}>
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell">
              <BannerContent>
                <h1>Fundos de Investimento</h1>
                <p>Conheça a nossa lista de fundos</p>
              </BannerContent>
            </div>
          </div>
        </div>
      </Banner>

      <div className="grid-container">
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
      </div>

      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell large-9">
            <Card>
              <SearchInput
                type="search"
                search={event => searchInvestment(event.target.value)}
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
            <div className="filters">
              <Card>
                <RiskProfile>
                  <p>Perfil de risco de fundo</p>

                  <select onChange={event => filterRisk(event.target.value)}>
                    <option value="0">Todos</option>
                    <option value="1">Risco 1</option>
                    <option value="2">Risco 2</option>
                    <option value="3">Risco 3</option>
                    <option value="4">Risco 4</option>
                    <option value="5">Risco 5</option>
                    <option value="6">Risco 6</option>
                    <option value="7">Risco 7</option>
                    <option value="8">Risco 8</option>
                    <option value="9">Risco 9</option>
                    <option value="10">Risco 10</option>
                    <option value="11">Risco 11</option>
                    <option value="12">Risco 12</option>
                  </select>
                </RiskProfile>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Investments;
