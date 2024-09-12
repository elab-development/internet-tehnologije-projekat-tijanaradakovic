import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function TravelsPage() {
const [travels,setTravels] = useState([]);
const [error,setError] = useState();

useEffect(() => {
    const fetchTravels = async () => {
      const token = localStorage.getItem("auth_token");
      try {
        const response = await axios.get("api/travels", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setTravels(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
        
      }
    };

    fetchTravels();
  }, []);

  return (
    <div className='container'>
         <div className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'><Link to= "/users">Users</Link></li>
                <li className='nav-item'><Link to= "/travels">Travels</Link></li>
                <li className='nav-item'><Link to= "/trips">Plans</Link></li>
            </ul>
        </div>
        <div className=''>
            <table className='table'>
            <thead>
                <tr>
                  <th>Travel ID</th>
                  <th>Destination</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {travels.length ? (travels.map((t,index)=>
                <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.destination}</td>
                <td>{t.start_date}</td>
                <td>{t.end_date}</td>
                <td><button type='button'>View plans</button></td>
                
                </tr>
                )) : (<tr>
                  No travel plans found!
                </tr>)}
              
              </tbody>
            </table>
        </div>

    </div>
  )
}

export default TravelsPage