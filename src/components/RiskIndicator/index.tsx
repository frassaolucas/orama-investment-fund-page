import React from 'react';

import { Container } from './styles';

interface RiskIndicatorProps {
  riskColor: string;
  styleClass?: string;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({
  riskColor,
  styleClass,
}) => {
  return <Container riskColor={riskColor} className={styleClass} />;
};

export default RiskIndicator;
