import React from 'react'
import Activity from './Activity'

const Trip =({trip})=> {
  return (
    <>
    
    <div className='card'>
      <img src={require (".././trips/img/" +trip.picture)} alt={trip.naziv} className='card-img'/>
      <div className='card-body'>
        <h3>{trip.naziv}</h3>
        <p>{trip.datum_polaska}-{trip.datum_dolaska} </p>
        <p>{trip.opis}</p>
        <div className='activities'>
        <h4>Aktivnosti:</h4>
        {trip.aktivnosti.map(a =>
        <Activity activities={a}key={a.aktivnost_id} />

        )}
        </div>
        
      </div>

    </div>
    </>
  )
}

export default Trip