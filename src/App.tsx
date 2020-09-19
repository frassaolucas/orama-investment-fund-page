import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/foundation-6.6.3-custom/css/foundation.min.css';
import GlobalStyle from './styles/global';

import Investments from './pages/Investments';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Investments />

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
