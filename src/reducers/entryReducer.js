import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from '../actions/types';

const initialState = {
  entriesPayload: {},
  getEntriesError: false,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entriesPayload: action.payload,
      };
    case GET_ENTRIES_ERROR:
      return {
        ...state,
        getEntriesError: action.payload,
      };
    default:
      return state;
  }
};

export default entryReducer;
