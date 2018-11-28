import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/types';

const initialState = {
  registerSuccess: false,
  registerError: false,
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
    default:
      return state;
  }
};

export default userReducer;
