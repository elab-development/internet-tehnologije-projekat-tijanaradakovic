import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

const Trip =({trip})=> {
  
  return (
    <>  
      <div className='card'>
        {/*   <img src={require (".././trips/img/" + trip.picture)} alt={trip.naziv} className='card-img'/> */}
        <div className='card-body'>
          <h3>{trip.destination}</h3>
          <p>Start date: {trip.start_date}</p>
          <p>End date: {trip.end_date} </p>
          <Link to={"/details/" + trip.id}>Details</Link>
           
        </div>
      </div>
    </>
  )
}

export default Trip