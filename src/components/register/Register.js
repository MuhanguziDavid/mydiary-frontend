import React from 'react';

const Register = () => (
  <div>
    <h2>Sign Up Here</h2>
    <form id="login">
      <div className="inputBox">
        <input type="text" name="username" id="username" required="required" />
        <label>Username</label>
      </div>
      <div className="inputBox">
        <input type="email" name="email" id="email" required="required" />
        <label>Email</label>
      </div>
      <div className="inputBox">
        <input type="password" name="password" id="password" required="required" />
        <label>Password</label>
      </div>
      <div className="inputBox">
        <input type="password" name="confirm_password" id="confirm_password" required="required" />
        <label>Confirm Password</label>
      </div>
      <button className="btn btn-primary" type="button" onClick="#">Sign Up</button>
    </form>
  </div>
);

export default Register;
