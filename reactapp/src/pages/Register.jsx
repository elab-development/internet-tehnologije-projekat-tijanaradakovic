import React from 'react'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import TextField from '../components/shared/TextField';
import NavBar from '../components/NavBar';

function Register() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const [error, setError] = useState("");
    const [data,setData]= useState([]);

    
    function handleSubmit(e){
        e.preventDefault();
        if(!email || !password || !name
        ){
          setError("Email, password and name are required!");
          console.log("ovde");
          return;
        }
        setData({
          'name': name,
          'email': email,
          'password': password
        });
        
        
      
        setError("");
          
        alert('Uspesno ste se registrovali!');
        console.log(data);
      }
    
        
  
    
  
  
    
    return (
        <div className='login-page'>
                  <NavBar/>

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
            required= {true}
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
                      required={true}
  
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
                      required={true}
  
                />
          </div>
          <button type='submit' className='login-button' style={{width:'100px', height:'40px'}}>Register</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='register-link'>Have an account?<Link to='/login'>Log in here</Link> </div>
       </div>
       </div>
  
    )
  
}

export default Register