import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  registerUsers,
  loginUsers,
} from '../../actions/userActions';
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/types';
import axiosInstance from '../../config/axiosInstance';

describe('userActions', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should signup a user', async () => {
    const payload = {
      user: {
        username: 'user25',
        email: 'user25@gmail.com',
        password: 'Abc12345',
        confirm_password: 'Abc12345',
      },
    };
    mock.onPost('/api/v1/auth/signup').reply(201, payload);
    registerUsers(payload)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_SUCCESS, payload: true },
      ],
    );
  });

  it('should not signup a user with wrong credentials', async () => {
    const payload = {
      user: {
        username: 'user25',
        email: 'user25@gmail.com',
        password: 'Abc12345',
        confirm_password: 'theseDontMatch',
      },
    };
    mock.onPost('/api/v1/auth/signup').reply(400, payload);
    registerUsers(payload)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_ERROR, payload: true },
      ],
    );
  });

  it('should login a user', async () => {
    const payload = {
      username: 'user25',
      password: 'Abc12345',
    };
    mock.onPost('/api/v1/auth/login').reply(200, payload);
    loginUsers(payload)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_SUCCESS, payload: true },
      ],
    );
  });

  it('should not login a user with wrong credentials', async () => {
    const payload = {
      username: 'user25',
      password: 'wrongPassword',
    };
    mock.onPost('/api/v1/auth/login').reply(401, payload);
    loginUsers(payload)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: LOGIN_ERROR, payload: true },
      ],
    );
  });
});
