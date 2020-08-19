import React from 'react';

import { Global } from './styles/Global';
import Routes from './Routes';

import Book from './pages/Book';

function App() {
  return (
    <>
      <Book />
      <Routes />
      <Global />
    </>
  );
}

export default App;