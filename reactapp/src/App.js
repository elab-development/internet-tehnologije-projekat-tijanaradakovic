import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Pocetna/>}/>
        <Route path="/login" element={<Prijava/>}/>
        <Route path="/register" element={<Registracija/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
