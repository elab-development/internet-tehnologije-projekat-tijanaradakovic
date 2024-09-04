import React from 'react'
import { useState } from 'react'
import '../App.css';
import { Link ,useNavigate} from 'react-router-dom';

function Prijava() {
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
    console.log('Form data',{email,password});
    navigate('/');
  
  }
  
  return (
    <div className='login-page'>
      <div className='login-header'>
            <h1>Log In</h1>
        </div>
    <div className="login-container">
      <form className='login-form' onSubmit={handleSubmit}>
      
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
      <div className='register-link'>Don't have an account?<Link to='/register'>Register here!</Link> </div>
     </div>
    </div>
  )
}

export default Prijava