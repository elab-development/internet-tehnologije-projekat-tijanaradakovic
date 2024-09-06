import React from 'react'
import Trip from '../models/Trip'
import { useState } from 'react'
import Trips from '../trips/trips.json';
import TextField from '../components/shared/TextField';


export default function Pocetna({trips}) {
  const [search,setSearch]= useState("")
  const filteredDate =Trips.filter(t => {
    return (
      t.naziv.toLowerCase().startsWith(search)
    )});
  
  function handleSearch(e){
      setSearch(e.target.value.toLowerCase());
  }
  return (
    <>
    
    
    <div className='pocetna-page'>
    <h2>Putovanja</h2>
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
     {filteredDate ? filteredDate.map((Trips,index) => 
        <Trip trip={Trips} key ={index}/>
     ) :trips.map(t => 
      <Trip trip={t} key ={t.id}/>
   )}
   {filteredDate.length === 0? <p>Nema ponudjenih putovanja!</p>:<p></p>}
      
     

    </div>
    </>
  )
}
