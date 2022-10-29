import React from 'react'
import moment from 'moment';
import './styles.css'
export default function CuadroIdaVuelta(props) {
  const {tramos} = props
  const tramoSalida = tramos[0]
  const horaSalida = tramoSalida.horaSalida
  const fechaSalida = tramoSalida.fechaSalida
  const tramoLlegada = tramos[tramos.length - 1]
  const horaLlegada = tramoLlegada.horaLlegada
  const fechaLlegada = tramoLlegada.fechaLlegada
  const llegada = moment(fechaLlegada + ' ' + horaLlegada, "DD/MM/YYYY HH:mm:ss")
  const partida = moment(fechaSalida + ' ' + horaSalida, "DD/MM/YYYY HH:mm:ss")
  const duration = moment.duration(llegada.diff(partida));
  
  return (
    <div className='cuadroIdaVuelta'>  
      <p>LO</p>
      <div>
        <div className='lineHours'>
            <div>
            {moment(partida).format("HH:mm") }
            </div>
            <div>
            {moment(llegada).format("HH:mm") }
            </div>
            <div>
            {duration.asHours().toString() + 'H'}
            </div>
        </div>
        <div className='lineHours'>
            <div>
            {tramoSalida.aeropuerto }
            </div>
            <div>
            { tramoLlegada.aeropuerto }
            </div>
            <div>
            {
              ( tramos.length === 1 && <p className='directo'>Directo</p>)
            }
            {
              (tramos.length  !== 1 && <p className='escalas'>{tramos.length} escalas</p>) 
            }
            </div>


        </div>
      </div>
    </div>
  )
}
