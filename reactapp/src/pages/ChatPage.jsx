import React from 'react'
import {Link} from 'react-router-dom'
import TextField from '../components/shared/TextField';
import { useState } from 'react'
function ChatPage() {
  const [travel,setTravel] = useState({
    destination:"",
    start_date:"",
    end_date:"",
    guide:""
  });
  function handleChange(e){
    setTravel({
      ...travel,
      [e.target.name]:e.target.value,
    });
  }
  return (
    <div className='container'>
        <div className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'><Link to= "/trips">My travel plans</Link></li>
            </ul>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <form className='travel-form'>
            <div className='form-group'>
            <label>Destination</label>
              <TextField
                type ="text"
                name ="destination"
                id="destination"
                value = {travel.destination}
                onChange={handleChange}
                required= {true}

              />
            </div>
            <div className='form-group'>
            <label>Start date</label>

              <TextField
                type ="date"
                name ="start_date"
                id="start_date"
                value = {travel.start_date}
                onChange={handleChange}
                required= {true}

              />
            </div>
            <div className='form-group'>
            <label>End date</label>
              <TextField
                type ="date"
                name ="end_date"
                id="end_date"
                value = {travel.end_date}
                onChange={handleChange}
                required= {true}

              />
            </div>
            <div className='form-group'>
              <label>Do you need guide?Type yes or no!</label>
              <TextField
                type ="text"
                name ="guide"
                id="guide"
                value = {travel.guide}
                onChange={handleChange}
                required= {true}

              />
            </div>
            <button type='submit'style={{width:'200px', height:'40px'}}>Generate travel plan</button>
            </form>
           
          </div>
          <div className='col-md-8'>
            <h1 style={{textAlign:'center'}}>Generated travel plan</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Description</th>
                  <th>Activity</th>
                </tr>
                
              </thead>
              <body>

              </body>
            </table>
          </div>
        </div>
        
    </div>
  )
}

export default ChatPage