import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Trips from '../../trips/trips.json'; 
import Footer from './Footer';
import Header from './Header';

const Details = () => {
  const { id } = useParams();
  const trip = Trips.find(t => t.id === parseInt(id, 10));

  return (
    <><Header/>
      <div className='container'>
        
        <div className='back-text'>
          <Link to="/" id="back-link" style={{ color: 'white', textDecoration: 'none', backgroundColor: 'grey', padding: '0.5rem 1rem' }}>
            Back
          </Link>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className='title'>
              <h1>{trip.naziv}</h1>
            </div>
            <div className='group' id="acordian" role='tablist'>
              <div className='middle'>
                <h3 id="trip-price">Cena: {trip.cena}</h3>
                <p>{trip.opis}</p>
                <div className='aktivnosti' role='tab' id='headingOne'>
                  <h5>Aktivnosti:</h5>
                
                <ul>
                {trip.aktivnosti.map((a, index) => (
                    <li key = {a.id}>{a.dan}. dan {a.naziv_aktivnosti}</li>
                  ))}
                </ul>
                </div>
                  
                
                
              </div>
             
            </div>
           
          </div>
          <div className="col-md-5">
            <div className='image-section'>
              <img src={require("../../trips/img/" + trip.picture)} alt={trip.naziv} />
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Details;
