import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from '../../actions/types';
import entryReducer from '../../reducers/entryReducer';

describe('entryReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      entriesPayload: [],
      getEntriesError: false,
    };
  });

  it('should run initial state', () => {
    expect(entryReducer(initialState, {})).toEqual(initialState);
  });

  it('should add an entriesPayload when GET_ENTRIES_SUCCESS is dispatched', () => {
    const action = {
      type: GET_ENTRIES_SUCCESS,
      payload: [{ entry: 1 }],
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      entriesPayload: action.payload,
    });
  });

  it('should set getEntriesError to true when GET_ENTRIES_ERROR is dispatched', () => {
    const action = {
      type: GET_ENTRIES_ERROR,
      payload: true,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      getEntriesError: action.payload,
    });
  });
});
