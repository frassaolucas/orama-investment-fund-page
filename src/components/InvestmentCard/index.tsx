import React from 'react';
import { Link } from 'react-router-dom';
import { MdReply } from 'react-icons/md';

import RiskIndicator from '../RiskIndicator';
import Button from '../Button';

import { Container, CardRow } from './styles';

export interface InvestmentInterface {
  id: number;
  simple_name: string;
  specification: {
    fund_type: string;
    fund_class: string;
    fund_main_strategy: {
      name: string;
    };
  };
  quota_date: string;
  operability: {
    minimum_initial_application_amount: string;
    retrieval_quotation_days_str: string;
  };
  profitabilities: {
    month: string;
    year: string;
    m12: string;
  };
}

interface InvestmentCardProps {
  investmentData: InvestmentInterface;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ investmentData }) => {
  return (
    <Container>
      <CardRow>
        <div className="card-header">
          <span>{investmentData.simple_name}</span>
          <p>{investmentData.specification?.fund_main_strategy?.name}</p>
          <p>
            {investmentData.specification?.fund_type} |{' '}
            {investmentData.specification?.fund_class}
          </p>
        </div>
        <RiskIndicator styleClass="risk-indicator" />
      </CardRow>

      <CardRow>
        <span>Data da cota:</span>
        <span>{investmentData.quota_date}</span>
      </CardRow>

      <CardRow>
        <span>Rentabilidade 12 Meses:</span>
        <span>{investmentData.profitabilities?.month}</span>
      </CardRow>

      <CardRow className="show-for-large-only">
        <span />
        <span>{investmentData.profitabilities?.year}</span>
      </CardRow>

      <CardRow className="show-for-large-only">
        <span />
        <span>{investmentData.profitabilities?.m12}</span>
      </CardRow>

      <CardRow>
        <span>Aplicação Mínima:</span>
        <span>
          {investmentData.operability?.minimum_initial_application_amount}
        </span>
      </CardRow>

      <CardRow>
        <span>Cotização do Resgate:</span>
        <span>{investmentData.operability?.retrieval_quotation_days_str}</span>
      </CardRow>

      <CardRow>
        <Link to="/">mais detalhes</Link>
        <Button>
          <span>Aplicar</span>
          <MdReply size={20} />
        </Button>
      </CardRow>
    </Container>
  );
};

export default InvestmentCard;
