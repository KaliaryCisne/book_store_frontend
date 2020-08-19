import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Global } from './styles/Global';
import Routes from './Routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Global />
      </BrowserRouter>
      
    </>
  );
}

export default App;