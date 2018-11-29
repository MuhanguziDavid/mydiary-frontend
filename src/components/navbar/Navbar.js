import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  showNavbar = () => {
    const { loginSuccess } = this.props;
    if (loginSuccess === false) {
      return 'navbar-no-display';
    }
    return 'navbar-display';
  };

  render() {
    return (
      <header className={this.showNavbar()}>
        <div className="container">
          <div id="branding">
            <h1>
              <span className="highlight">My</span>
              Diary
            </h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loginSuccess: state.user.loginSuccess,
});

Navbar.propTypes = {
  loginSuccess: PropTypes.bool,
};

Navbar.defaultProps = {
  loginSuccess: false,
};

export default connect(mapStateToProps, {})(Navbar);
