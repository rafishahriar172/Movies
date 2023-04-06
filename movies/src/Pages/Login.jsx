import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss"

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange= (event) => {
    setInputs(prev => ({...prev, [event.target.name] : event.target.value}))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      console.log(inputs);
      
    }catch(err){

    }
  };
  return (
    <div className="login">
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"  
            name='username'          
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name='password'           
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="signup-link">
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </div>
  )
}

export default Login