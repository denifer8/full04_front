import React from 'react'
import CuadroVuelo from './cuadroVuelo/CuadroVuelo';
import './styles.css'

export default function ListaVuelos(props) {
  const {listaVuelos, vaciarLista } = props;
  return (
    <>
    ListaVuelos
      <button onClick={vaciarLista}>Volver</button> 
      <div className='listaVuelos'>
      {   listaVuelos.map( (vuelo, index) => (
          <div key={index}>
            <CuadroVuelo vuelo={vuelo} />
          </div>
      ))}
      </div>
      <button onClick={vaciarLista}>Volver</button>
    
    </>
  )
}
