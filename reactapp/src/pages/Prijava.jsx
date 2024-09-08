import React from 'react'
import { useState,useEffect } from 'react'
import '../App.css';
import { Link ,useNavigate} from 'react-router-dom';
import TextField from '../components/shared/TextField';
import NavBar from '../components/NavBar';

function Prijava({users}) {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //const [loggedIn,setLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate('/trips');
  //   }
  // }, [loggedIn]);
 



  function handleSubmit(e){
    e.preventDefault();
    if(!email|| !password){
      setError("Email and password are required!");
      return;
    }
    

    setError("");
    const nameExist = users.find(user => user.email ===email);
    if(!nameExist){
      setError('Ne postoji koristnik s tim imenom');
      alert('Ne postoji koristnik s tim imenom');
    }
    const passExist = users.find(user => user.password ===password);
    if(passExist){
     // setLoggedIn(true);
     navigate('/trips');
    }
    else{
      alert('Netacna lozinka!');

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

export default Prijava