import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
} from './actionCreators';
import axiosInstance from '../config/axiosInstance';

export const registerUsers = (payload) => dispatch => {
  toast.dismiss();
  axiosInstance
    .post('/api/v1/auth/signup', payload)
    .then((response) => {
      localStorage.setItem('auth_token', response.data.auth_token);
      localStorage.setItem('username', payload.username);
      dispatch(registerSuccess(true));
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(registerError(true));
      toast.error(error.response.data.message, { autoClose: false, hideProgressBar: true });
    });
};

export const loginUsers = (payload) => dispatch => {
  toast.dismiss();
  axiosInstance
    .post('/api/v1/auth/login', payload)
    .then((response) => {
      localStorage.setItem('auth_token', response.data.auth_token);
      localStorage.setItem('username', payload.username);
      dispatch(loginSuccess(true));
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch(loginError(true));
      toast.error(error.response.data.message, { autoClose: false, hideProgressBar: true });
    });
};

export const setLoginToTrue = () => dispatch => {
  dispatch(loginSuccess(true));
};

export const setLoginToFalse = () => dispatch => {
  dispatch(loginSuccess(false));
};

export default registerUsers;
