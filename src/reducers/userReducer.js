import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actions/types';

const initialState = {
  registerSuccess: false,
  registerError: false,
  loginSuccess: false,
  loginError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
