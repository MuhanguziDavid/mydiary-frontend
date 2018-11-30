import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
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

export const getEntriesSuccess = payload => ({
  type: GET_ENTRIES_SUCCESS,
  payload,
});

export const getEntriesError = payload => ({
  type: GET_ENTRIES_ERROR,
  payload,
});
