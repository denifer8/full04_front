import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filtro from './components/filtro/Filtro';
import ListaVuelos from './components/listaVuelos/ListaVuelos';

function App() {
  const [listaVuelos, setListaVuelos] = useState([]);

  return (
    <div className="App">
      {
        
        (listaVuelos.length === 0 && <Filtro setListaVuelos={setListaVuelos}/> )

      }
            {
        
        (listaVuelos.length !== 0 && <ListaVuelos listaVuelos={listaVuelos} 
        vaciarLista = {()=>setListaVuelos([])} /> )

      }

    </div>
  );
}

export default App;
