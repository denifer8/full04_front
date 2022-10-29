import React from 'react'
import CuadroCompra from './CuadroCompra';
import CuadroIdaVuelta from './CuadroIdaVuelta';

import './styles.css';

export default function CuadroVuelo(props) {
  const {vuelo} = props;
  const tramosIda = vuelo.filter( elemento => elemento.sentido === 'ida')
  const tramosVuelta = vuelo.filter( elemento => elemento.sentido !== 'ida')
  var precioTotal = vuelo.reduce( (suma, tramo)=> { return suma + new Number(tramo.precio); }, 0);

  return (
    <div className='cuadroVuelo'>
      <CuadroIdaVuelta tramos={tramosIda}/>
      <CuadroIdaVuelta  tramos={tramosVuelta}/>
      <CuadroCompra precioTotal={precioTotal}/>
    </div>
  )
}
