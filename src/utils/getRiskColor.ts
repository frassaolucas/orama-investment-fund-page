import { colors } from '../styles/global';

const getRiskColor = (riskColor: number): string => {
  switch (riskColor) {
    case 1:
      return colors.colorRiskOne;
    case 2:
      return colors.colorRiskTwo;
    case 3:
      return colors.colorRiskThree;
    case 4:
      return colors.colorRiskFour;
    case 5:
      return colors.colorRiskFive;
    case 6:
      return colors.colorRiskSix;
    case 7:
      return colors.colorRiskSeven;
    case 8:
      return colors.colorRiskEight;
    case 9:
      return colors.colorRiskNine;
    case 10:
      return colors.colorRiskTen;
    case 11:
      return colors.colorRiskEleven;
    case 12:
      return colors.colorRiskTwelve;
    default:
      return 'transparent';
  }
};

export default getRiskColor;
