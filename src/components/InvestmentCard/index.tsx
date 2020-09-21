import React from 'react';
import { Link } from 'react-router-dom';
import { MdReply } from 'react-icons/md';

import RiskIndicator from '../RiskIndicator';
import Button from '../Button';

import getRiskColor from '../../utils/getRiskColor';
import formatNumber from '../../utils/formatNumber';
import formatDate from '../../utils/formatDate';

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
    fund_risk_profile: {
      score_range_order: number;
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
        <RiskIndicator
          riskColor={getRiskColor(
            investmentData.specification?.fund_risk_profile?.score_range_order,
          )}
          styleClass="risk-indicator"
        />
      </CardRow>

      <CardRow>
        <span>Data da cota:</span>
        <span>{formatDate(investmentData.quota_date)}</span>
      </CardRow>

      <CardRow>
        <span>Rentabilidade 12 Meses:</span>
        <span>{formatNumber(investmentData.profitabilities?.month, 100)}</span>
      </CardRow>

      <CardRow className="show-for-large-only">
        <span />
        <span>{formatNumber(investmentData.profitabilities?.year, 100)}</span>
      </CardRow>

      <CardRow className="show-for-large-only">
        <span />
        <span>{formatNumber(investmentData.profitabilities?.m12, 100)}</span>
      </CardRow>

      <CardRow>
        <span>Aplicação Mínima:</span>
        <span>
          {formatNumber(
            investmentData.operability?.minimum_initial_application_amount,
          )}
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
