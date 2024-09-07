import React from 'react'
import { useState } from 'react'
import '../App.css';
import { Link ,useNavigate} from 'react-router-dom';
import TextField from '../components/shared/TextField';


function Prijava({users}) {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    if(!email || !password){
      setError("Email and password are required!");
      return;
    }
    

    setError("");
    const nameExist = users.find(user => user.email ===email);
    if(!nameExist){
      console.log('ne postoji koristnik s atim imenom');
    }
    const passExist = users.find(user => user.password ===password);
    if(passExist){
      navigate('/trips');
    }

   
    
    
  
  }
  
  return (
    <div className='login-page'>
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
                    onChange={(e)=>setEmail(e.target.value)}
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
                    onChange={(e)=>setPassword(e.target.value)}
                    required

              />
        </div>
        <button type='submit' className='login-button' style={{width:'100px', height:'40px'}}>Login</button>
      </form>
      <div className='register-link'>Don't have an account?<Link to='/register'>Register here!</Link> </div>
     </div>
    </div>
  )
}

export default Prijava