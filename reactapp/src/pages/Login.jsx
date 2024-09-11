import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css';
import { Link ,useNavigate} from 'react-router-dom';
import TextField from '../components/shared/TextField';
import NavBar from '../components/NavBar';
import axios from 'axios';

function Login({users}) {
  const navigate = useNavigate();
  const[userData,setUser] = useState({
    email:"",
    password:"",
  });
  const [error,setError] = useState(null);
  const [success,setSuccess] = useState(null);
  function handleChange(e){
    let newUserData = userData;
    newUserData[e.target.name]= e.target.value;
    setUser(newUserData);

  }
  
 
  function handleSubmit(e){
    e.preventDefault();
    try{
      axios.post("http://127.0.0.1:8000/api/login", userData);

      setSuccess('Successful login');
      setError(null);

    }catch(e){
        setSuccess(null);
        setError('Login failed')
    }
    
    
  
  }
  
  return (
    <div className='login-page'>
              <NavBar/>

      <div className='login-header'>
            <h1>Log In</h1>
        </div>
    <div className="login-container">
      <form className='login-form' onSubmit={handleSubmit}>
      
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <TextField
                    type="text"
                    name="email"
                    id="email"
                    value ={email}
                    onChange={handleChange}
                    required= {true}
                />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <TextField
                    type="password"
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleChange}
                    required={true}
              />
        </div>
        
          <button type='submit' className='login-button' style={{width:'100px', height:'40px'}}>Login</button>
          
       
      </form>
      <div className='register-link'>Don't have an account?<Link to='/register'>Register here!</Link> </div>
     </div>
    </div>
  )
}

export default Login