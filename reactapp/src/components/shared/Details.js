import React from 'react';
import {Link,useParams} from 'react-router-dom';
import Trips from '../../trips/trips.json'; 
import Footer from './Footer';


const Details = () => {

  const {id} = useParams()

  const trip = Trips.find(t => t.id === parseInt(id, 10));

 

  return (
    <>
    <div className='container'>
      <div className='back-text' >
        <Link to="/" id="back-link" style={{ color: 'white', textDecoration: 'none',backgroundColor:'grey',  padding: '0.5rem 1rem'}}>
            Back
          </Link>
          </div>
      <div className="content">
        <div className="card-gropu">
          
          <h1>{trip.naziv}</h1>
          <div id="card-text">
            <h3 id="trip-price">{trip.cena} </h3>
          </div>
        </div>
        <div className="card-body">
          <div className="img-div">
            <img src={require ("../../trips/img/" +trip.picture)} alt={trip.naziv} /> 
            <p>{trip.opis}</p>
          <h5>Aktivnosti:</h5>
          <h6>{trip.aktivnosti.map(a=><h6>{a.naziv_aktivnosti}</h6>)}</h6>
          </div>
          
          
        </div>
      </div>
      
      
    </div>
    <Footer/>
    </>
  );
};

export default Details;

