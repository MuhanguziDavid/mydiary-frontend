import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerError = payload => ({
  type: REGISTER_ERROR,
  payload,
});
