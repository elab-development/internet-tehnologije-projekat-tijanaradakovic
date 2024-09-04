import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';


function Registracija() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const [error, setError] = useState("");
  
    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password || name){
        setError("Email, password and name are required!");
        return;
        }
        setError("");
        console.log('Form data',{name,email,password});
  
    }
  
  
    
    return (
        <div className='login-page'>
        <div className='login-header'>
            <h1>Create a new account!</h1>
        </div>
      <div className="login-container">
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input
            type="text"
            name="name"
            id="name"
            style={{marginLeft:'40px'}}
            className='form-control'

            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            />
            
        </div>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
                      type="text"
                      name="email"
                      id="email"
                      className='form-control'
                      style = {{marginLeft:'48px'}}
                      value ={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
  
                  />
          </div>
  
          <div className="form-control">
            <label htmlFor='password'>Password</label>
            <input
                      type="text"
                      name='password'
                      id='password'
                      className='form-control'
                      style ={{marginLeft:'20px'}}
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required
  
                />
          </div>
          <button type='submit' className='login-button' style={{width:'100px', height:'40px'}}>Login</button>
        </form>
        <div className='register-link'>Have an account?<Link to='/login'>Log in here</Link> </div>
       </div>
       </div>
  
    )
  
}

export default Registracija