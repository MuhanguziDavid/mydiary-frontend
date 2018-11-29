import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

describe('userReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      registerSuccess: false,
      registerError: false,
      loginSuccess: false,
      loginError: false,
    };
  });

  it('should run initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('should set registerSuccess to true when REGISTER_SUCCESS is dispatched', () => {
    const action = {
      type: REGISTER_SUCCESS,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerSuccess: action.payload,
    });
  });

  it('should set registerError to true when REGISTER_ERROR is dispatched', () => {
    const action = {
      type: REGISTER_ERROR,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerError: action.payload,
    });
  });

  it('should set loginSuccess to true when LOGIN_SUCCESS is dispatched', () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loginSuccess: action.payload,
    });
  });

  it('should set loginError to true when LOGIN_ERROR is dispatched', () => {
    const action = {
      type: LOGIN_ERROR,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loginError: action.payload,
    });
  });
});
