import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      console.log(`Email: ${email}, Password: ${password}`);
      if(password.length < 8){
        alert("password can not be less then 8")
      }
      else{
        navigate("/")
      }
    }catch(err){

    }
  };
  return (
    <div className="login">
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
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