import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

describe('userReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      registerSuccess: false,
      registerError: false,
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
});
