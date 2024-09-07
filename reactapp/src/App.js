import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import Trips from './trips/trips.json';
import Users from './trips/users.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/shared/Details';

import { useState } from 'react';
import ActivityPage from './pages/ActivityPage';
function App() {
  const[trips,setnewTrips]= useState(Trips)
  const[favoritesNum,setFavoritesNum] = useState(0);
  const[favorites,setFavorites] = useState([]);


  function handleAddFav(id){
    setFavorites(trips.filter(t=>t.id === id));
    setFavoritesNum(favoritesNum+1);
    console.log(favoritesNum);
  }
  function handleRmvFav(id){
    setFavorites(trips.filter(t=>t.id !== id));
    setFavorites(favoritesNum--);

  }
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Pocetna trips={trips} handleAddFav={handleAddFav} handleRmvFav={handleRmvFav}/>}/>
        <Route path="/login" element={<Prijava users={Users}/>}/>
        <Route path="/register" element={<Registracija />}/>
        <Route path="/trips" element={<ActivityPage  trips={Trips}/>}/>
        <Route
                path="/details/:id"
                element=
                {<Details 
                    
      
                  />}
                
              />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
