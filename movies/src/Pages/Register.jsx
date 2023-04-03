import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import "./Login.scss"

const Register = () => {

  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [inputs, setInput] = useState({
    userName: "",
    email: "",
    password:""
  })

  const navigate = useNavigate();

  const handelChange = (event) => {
    setEmail(event.target.value);
    setInput(prev => ({...prev, [event.target.name]: event.target.value}))
  };
  // const handleUserChange = (event) => {
  //   setUser(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register", inputs)
      console.log(res)
      navigate("/")
    }catch(err){

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
            id="user"
            placeholder="Enter email"
            name='userName'
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