import React, { createContext, useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import Header from './components/Header';
import Registro from './components/Registro';
import Repositorios from './components/Repositorios';

export const DataContext = createContext(null);


function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <CookiesProvider >
        <DataContext.Provider value={{ data, setData }} >
          <Header />
          <Registro />
          <Repositorios />
        </DataContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
