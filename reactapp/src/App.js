import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import Trips from './trips/trips.json';
import Users from './trips/users.json';

import { useState } from 'react';

function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Pocetna trips={Trips}/>}/>
        <Route path="/login" element={<Prijava users={Users}/>}/>
        <Route path="/register" element={<Registracija />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
