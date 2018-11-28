import React from 'react';
import '../../assets/App.css';

const Login = () => (
  <div>
    <h2>Login Here</h2>
    <form id="login">
      <div className="inputBox">
        <input type="text" name="username" id="username" required="required" />
        <label>Username</label>
      </div>
      <div className="inputBox">
        <input type="password" name="password" id="password" required="required" />
        <label>Password</label>
      </div>
      <button className="btn btn-primary" type="button" onClick="#">Login</button>
    </form>
  </div>
);

export default (Login);
