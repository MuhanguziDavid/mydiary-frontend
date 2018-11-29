import axios from 'axios';

const baseURL = 'https://my-diary-3.herokuapp.com';
const timeout = 60000;
const token = localStorage.getItem('auth_token');
const headers = token
  ? {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  } : {
    'Content-Type': 'application/json',
  };

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});

export default axiosInstance;
