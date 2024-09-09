import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
const Trip =({trip,addFav,rmvFav})=> {
  const [isFilled, setIsFilled] = useState(false);
  return (
    <>
      <div className='card'>
        <img src={require (".././trips/img/" +trip.picture)} alt={trip.naziv} className='card-img'/>
        <div className='card-body'>
          <h3>{trip.naziv}</h3>
          <p>{trip.datum_polaska}-{trip.datum_dolaska} </p>
          <p>{trip.opis}</p>
          <Link to={"/details/" + trip.id}>Details</Link>
          <div className={`star ${isFilled ? 'filled' : ''}`}onClick={() => setIsFilled(!isFilled)}> 
            <FaStar onClick={()=>( !isFilled? addFav(trip.id): rmvFav(trip.id))}></FaStar>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Trip