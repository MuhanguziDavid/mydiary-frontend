import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUsers } from '../../actions/userActions';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerSuccess === true) {
      const { history } = this.props;
      history.push('/dashboard');
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      confirm_password,
    } = this.state;
    const payload = {
      username,
      email,
      password,
      confirm_password,
    };
    const { registerUsers } = this.props;
    registerUsers(payload);
  }

  render() {
    const {
      username,
      email,
      password,
      confirm_password,
    } = this.state;
    return (
      <div>
        <h2>Sign Up Here</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <input type="text" name="username" required="required" value={username} onChange={this.handleChange} />
            <label>Username</label>
          </div>
          <div className="inputBox">
            <input type="email" name="email" required="required" value={email} onChange={this.handleChange} />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input type="password" name="password" required="required" value={password} onChange={this.handleChange} />
            <label>Password</label>
          </div>
          <div className="inputBox">
            <input type="password" name="confirm_password" required="required" value={confirm_password} onChange={this.handleChange} />
            <label>Confirm Password</label>
          </div>
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerSuccess: state.user.registerSuccess,
});

Register.propTypes = {
  registerUsers: PropTypes.func.isRequired,
  registerSuccess: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

Register.defaultProps = {
  registerSuccess: false,
};

export default connect(mapStateToProps, { registerUsers })(Register);
