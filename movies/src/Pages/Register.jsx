import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import "./Login.scss"
import { postApi } from './api';

const Register = () => {

  const [inputs, setInput] = useState({
    "email": "",
    "username": "",
    "password":""
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate();

  const handelChange = (event) => {
    
    setInput(prev => ({...prev, [event.target.name]: event.target.value}))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(inputs.password.length<8){
      alert("Password can not be less than 8 Character")
    }
    else{
      try{
        await axios.post(postApi, inputs)      
        navigate("/")
      }catch(err){
        setErr(err.response.data)
      }
    }
  };

  return (
    <div className="login">
      <h2 style={{textAlign:"center"}}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"            
            name='email'
            onChange={handelChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user">User Name</label>
          <input
            type="name"
            className="form-control"
            id="username"
            placeholder="Enter email"
            name="username"
            onChange={handelChange}
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
            onChange={handelChange}
            required
          />
        </div>
        {err && <p className='errMsg'>{err}</p>}
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <div className="signup-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register