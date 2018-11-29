import React from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import '../../assets/App.css';

const LandingPage = (props) => (
  <div className="signup">
    <div className="login-menu">
      <h1>My Diary</h1>
      <div className="contents">
        <h2>An online journal where you can pen down your thoughts and feelings</h2>
      </div>
    </div>
    <div className="signup-box">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"><Login {...props} /></div>
        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Register {...props} /></div>
      </div>
    </div>
  </div>
);

export default LandingPage;
