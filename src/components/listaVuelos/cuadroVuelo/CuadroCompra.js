import React from "react";
import './styles.css'
export default function Precio(props) {
  const { precioTotal } = props;
  const select = (precio) => {
    alert("Vuelo ");
  };
  return (
    <div className="bloquePrecio">
      <div> {precioTotal} EUR</div>
      <div>
        <button onClick={select} className='botonSelect'>Select</button>
      </div>
    </div>
  );
}
