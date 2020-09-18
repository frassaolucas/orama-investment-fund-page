import React from 'react';

import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import GlobalStyle from './styles/global';

import Investments from './pages/Investments';

const App: React.FC = () => {
  return (
    <>
      <Investments />

      <GlobalStyle />
    </>
  );
};

export default App;
