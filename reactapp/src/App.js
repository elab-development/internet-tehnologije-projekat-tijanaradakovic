import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Trips from './trips/trips.json';
import Users from './trips/users.json';
import Details from './components/shared/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import TripPage from './pages/TripPage';
function App() {
 
  return (
    <>
    <BrowserRouter>
        
      
      <Routes>
     
        <Route path="/" element={<Home  />}/>
        <Route path="/login" element={<Login users={Users}/>}/>
        <Route path= "/trips"element={<TripPage trips={Trips}/>}/>
        <Route path="/register" element={<Register />}/>
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
