import React from 'react';

import { Container } from './styles';

interface RiskIndicatorProps {
  styleClass?: string;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ styleClass }) => {
  return <Container className={styleClass} />;
};

export default RiskIndicator;
