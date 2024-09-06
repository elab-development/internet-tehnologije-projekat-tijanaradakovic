import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TextField from '../components/shared/TextField';


function Registracija() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password || !name){
          setError("Email, password and name are required!");
          return;
        }
      
         
        setError("");
          
        console.log('Uspesno ste se registrovali!');
      }
        
        
  
    
  
  
    
    return (
        <div className='login-page'>
        <div className='login-header'>
            <h1>Create a new account!</h1>
        </div>
      <div className="login-container">
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <TextField
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            />
            
        </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <TextField
                      type="text"
                      name="email"
                      id="email"
                      value ={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
  
                  />
          </div>
  
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <TextField
                      type="password"
                      name='password'
                      id='password'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required
  
                />
          </div>
          <button type='submit' className='login-button' style={{width:'100px', height:'40px'}}>Register</button>
        </form>
        <div className='register-link'>Have an account?<Link to='/login'>Log in here</Link> </div>
       </div>
       </div>
  
    )
  
}

export default Registracija