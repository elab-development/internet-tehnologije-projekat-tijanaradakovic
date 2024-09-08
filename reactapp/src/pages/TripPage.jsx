import React from 'react'
import Trip from '../models/Trip'
import { useState } from 'react'
import Trips from '../trips/trips.json';
import TextField from '../components/shared/TextField';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { FaGripLines } from "react-icons/fa";
import SideBar from '../models/SideBar';
import NavBar from '../components/NavBar';
export default function TripPage({trips}) {
  const [search,setSearch]= useState("")
  const filteredDate =Trips.filter(t => {
    return (
      t.naziv.toLowerCase().startsWith(search)
    )});
    function handleSearch(e){
      setSearch(e.target.value.toLowerCase());
  }
  const[favoritesNum,setFavoritesNum] = useState(0);
  const[favorites,setFavorites] = useState([]);


  function handleAddFav(id){
    const newFav =trips.find(t=>t.id === id);
    setFavorites([...favorites,newFav]);
    setFavoritesNum(favoritesNum+1);
    console.log(favoritesNum);
    console.log(favorites)
  }
  function handleRmvFav(id){
    setFavorites(favorites.filter(t=>t.id !== id));
    if(favoritesNum>0){
    setFavoritesNum(favoritesNum-1);
    }
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <>
    
    <NavBar/>

      <div className='pocetna-page'>
          <h2>Putovanja</h2>
          <div className={`sidebar-poc ${isSidebarOpen ? 'open' : 'closed'}`}>
      <SideBar favorites={favorites} numFav={favoritesNum}></SideBar>
                  </div>
        <FaGripLines className="toggle-btn" onClick={toggleSidebar} style={{marginLeft:'900px'}}>
        
      </FaGripLines>
      <div className='search'>
        <p style ={{marginRight:'20px'}}>Search:</p>
        <TextField
          type="text"
          name="search"
          id="search_id"
          placeholder='Search...'
          value ={search}
          onChange={handleSearch}
          
        
          />
          </div>
         
        
          {filteredDate ? filteredDate.map((t,index) => 
              <Trip trip={t} addFav={handleAddFav} rmvFav={handleRmvFav} key ={index}/>
          ) :trips.map(t => 
            <Trip trip={t} addFav={handleAddFav} rmvFav={handleRmvFav} key ={t.id}/>
          )}
          {filteredDate.length === 0 ? <p>Nema ponudjenih putovanja!</p>:<p></p>}
        
      

      <Footer/>
      </div>
    </>
  )
}
