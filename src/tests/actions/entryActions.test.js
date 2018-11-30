import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  fetchEntries,
} from '../../actions/entryActions';
import {
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_ERROR,
} from '../../actions/types';
import axiosInstance from '../../config/axiosInstance';

describe('entryActions', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should retrieve all articles', async () => {
    const response = {
      status: 'success',
      entries: [{ entry: 1 }],
    };
    mock.onGet('/api/v1/entries').reply(200, response);
    fetchEntries()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: GET_ENTRIES_SUCCESS, payload: response.entries },
      ],
    );
  });

  it('should retrieve all articles', async () => {
    const response = {
      status: 'success',
      entries: [{ entry: 1 }],
    };
    mock.onGet('/api/v1/entries').reply(200, response);
    fetchEntries()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: GET_ENTRIES_SUCCESS, payload: response.entries },
      ],
    );
  });

  it('should not retrieve articles with wrong input', async () => {
    const response = {
      status: 'success',
      entries: [{ entry: 1 }],
    };
    mock.onGet('/api/v1/entries').reply(400, response);
    fetchEntries()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: GET_ENTRIES_ERROR, payload: true },
      ],
    );
  });
});
