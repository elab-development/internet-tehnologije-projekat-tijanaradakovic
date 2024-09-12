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
import ChatPage from './pages/ChatPage';
import AdminPage from './pages/AdminPage';
import UsersPage from './pages/adminpage/UsersPage';
import TravelsPage from './pages/adminpage/TravelsPage';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/login" element={<Login />}/>
          <Route path= "/trips"element={<TripPage/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/details/:id" element={<Details/>}/>           
          <Route path="/chatGpt" element={<ChatPage/>}/>           
          <Route path="/admin" element={<AdminPage/>}/>           
          <Route path="/users" element={<UsersPage/>}/>           
          <Route path="/travels" element={<TravelsPage/>}/>           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
