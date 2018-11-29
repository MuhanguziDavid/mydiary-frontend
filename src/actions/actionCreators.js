import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './types';

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerError = payload => ({
  type: REGISTER_ERROR,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});
