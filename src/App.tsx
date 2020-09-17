import React from 'react';

import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <>
      <h1>Hello World</h1>

      <GlobalStyle />
    </>
  );
};

export default App;
