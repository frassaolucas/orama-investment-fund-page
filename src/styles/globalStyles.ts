import { createGlobalStyle } from 'styled-components';

export const colors = {
  colorPrimary: '#7CC33E',
  colorSecondary: '#119c9f',

  colorGray: '#505152',
  colorGrayLight: '#fefefe',

  colorRiskOne: '#a6ecfc',
  colorRiskTwo: '#68f1dd',
  colorRiskThree: '#91ed6e',
  colorRiskFour: '#b0f42a',
  colorRiskFive: '#ddf40c',
  colorRiskSix: '#faf00e',
  colorRiskSeven: '#ffdc00',
  colorRiskEight: '#fb0',
  colorRiskNine: '#f80',
  colorRiskTen: '#ff5e00',
  colorRiskEleven: '#ff0600',
  colorRiskTwelve: '#b51414',
};

export default createGlobalStyle`
  :root {
    --color-primary: ${colors.colorPrimary};
    --color-secondary: ${colors.colorSecondary};

    --color-gray: ${colors.colorGray};
    --color-gray-light: ${colors.colorGrayLight};

    --color-risk-one: ${colors.colorRiskOne};
    --color-risk-two: ${colors.colorRiskTwo};
    --color-risk-three: ${colors.colorRiskThree};
    --color-risk-four: ${colors.colorRiskFour};
    --color-risk-five: ${colors.colorRiskFive};
    --color-risk-six: ${colors.colorRiskSix};
    --color-risk-seven: ${colors.colorRiskSeven};
    --color-risk-eight: ${colors.colorRiskEight};
    --color-risk-nine: ${colors.colorRiskNine};
    --color-risk-ten: ${colors.colorRiskTen};
    --color-risk-eleven: ${colors.colorRiskEleven};
    --color-risk-twelve: ${colors.colorRiskTwelve};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: var(--color-gray-light);
    color: var(--color-gray);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }

  button {
    cursor: pointer;
  }
`;
