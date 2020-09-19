import React from 'react';
import { Link } from 'react-router-dom';
import { MdReply } from 'react-icons/md';

import RiskIndicator from '../RiskIndicator';
import Button from '../Button';

import { Container, CardRow } from './styles';

const InvestmentCard: React.FC = () => {
  return (
    <Container>
      <CardRow>
        <span>Versa Long Biased FIM</span>

        <RiskIndicator />
      </CardRow>

      <CardRow>
        <p>Multimercado | Long And Short - Direcional</p>
      </CardRow>

      <CardRow>
        <span>Data da cota:</span>
        <span>16/09/2020</span>
      </CardRow>

      <CardRow>
        <span>Rentabilidade 12 Meses:</span>
        <span>133,82</span>
      </CardRow>

      <CardRow>
        <span>Aplicação Mínima:</span>
        <span>500.00,00</span>
      </CardRow>

      <CardRow>
        <span>Cotização do Resgate:</span>
        <span>D+9 (dias úteis)</span>
      </CardRow>

      <CardRow>
        <Link to="/">mais detalhes</Link>
        <Button>
          Aplicar
          <MdReply size={20} />
        </Button>
      </CardRow>
    </Container>
  );
};

export default InvestmentCard;
