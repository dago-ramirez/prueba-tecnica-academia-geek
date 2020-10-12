import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Registro from './components/Registro';

export const DataContext = createContext(null);


function App() {
  const [btnSubmit, setBtnSubmit] = useState(false);
  const [datos, setDatos] = useState({
    'nombres': '',
    'apellidos': '',
    'cedula': '',
    'fecha-nacimiento': '',
    'email': '',
    'usuario-github': ''
});
  let cookies = {};
  return (
    <div className="App">
      <DataContext.Provider value={{ cookies, btnSubmit, setBtnSubmit, datos, setDatos }} >
        <Header />
        <Registro />
      </DataContext.Provider>
    </div>
  );
}

export default App;
