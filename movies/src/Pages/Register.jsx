import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss"

const Register = () => {

  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, User: ${user} ,Password: ${password}`);
    navigate("/")
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
            value={email}
            onChange={handleEmailChange}
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
            value={user}
            onChange={handleUserChange}
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