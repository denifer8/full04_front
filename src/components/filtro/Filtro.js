import React from 'react'

export default function Filtro(props) {
    const {setListaVuelos} = props;
    const buscarListado = async () => {
        try {
            const api = await fetch('http://localhost:4000/api/vuelos');
            const data = await api.json();
            setListaVuelos(data)
            
        } catch (error) {
            console.log(error)
        }
        

    }
  return (
    <div>Filtro
        <button onClick={buscarListado}>Buscar Vuelos</button>
    </div>
  )
}
