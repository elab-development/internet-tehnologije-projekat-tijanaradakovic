import './App.css';
import Pocetna from './pages/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import Trips from './trips/trips.json';
import Users from './trips/users.json';
import Details from './components/shared/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import TripPage from './pages/TripPage';
function App() {
  
  return (
    <>
    <BrowserRouter>
        
      
      <Routes>
     
        <Route path="/" element={<Pocetna  />}/>
        <Route path="/login" element={<Prijava users={Users}/>}/>
        <Route path= "/trips"element={<TripPage trips={Trips}/>}/>
        <Route path="/register" element={<Registracija />}/>
        <Route
                path="/details/:id"
                element=
                {<Details 
                    
      
                  />}
                
              />
              
      </Routes>
      
    </BrowserRouter>

    </>
  );
}

export default App;
