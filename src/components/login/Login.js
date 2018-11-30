import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loginUsers, setLoginToFalse } from '../../actions/userActions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    const { setLoginToFalse } = this.props;
    setLoginToFalse();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess === true) {
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
      password,
    } = this.state;
    const payload = {
      username,
      password,
    };
    const { loginUsers } = this.props;
    loginUsers(payload);
  }

  render() {
    const {
      username,
      password,
    } = this.state;
    return (
      <div>
        <h2>Login Here</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <input type="text" name="username" required="required" value={username} onChange={this.handleChange} />
            <label>Username</label>
          </div>
          <div className="inputBox">
            <input type="password" name="password" required="required" value={password} onChange={this.handleChange} />
            <label>Password</label>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => bindActionCreators({
  loginUsers,
  setLoginToFalse,
}, dispatch);

const mapStateToProps = state => ({
  loginSuccess: state.user.loginSuccess,
});

Login.propTypes = {
  loginUsers: PropTypes.func.isRequired,
  setLoginToFalse: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

Login.defaultProps = {
  loginSuccess: false,
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
