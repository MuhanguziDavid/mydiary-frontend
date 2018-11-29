import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Login } from '../../components/login/Login';

describe('Login component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const createSpy = (toSpy) => jest.spyOn(wrapper.instance(), toSpy);
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  const loginUsers = jest.fn();
  const setLoginToFalse = jest.fn();
  const props = {
    history: { push: jest.fn() },
  };
  const nextProps = {
    loginSuccess: true,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<Login
      loginUsers={loginUsers}
      setLoginToFalse={setLoginToFalse}
      {...props}
    />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit on form submission', () => {
    const spy = createSpy('handleSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('form').simulate('submit', getEvent());
    expect(spy).toBeCalled();
  });

  it('should call loginUsers when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(loginUsers).toBeCalled();
  });

  it('should call handleChange on form entry', () => {
    const spy = createSpy('handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="username"]').simulate('change', { target: { value: 'a username' } });
    expect(spy).toBeCalled();
  });

  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange({ target: { name: 'username', value: 'an entry' } });
    expect(wrapper.state().username).toEqual('an entry');
  });

  it('should not redirect if loginUsers is false', () => {
    wrapper.setProps({ loginUsers: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect to the dashboard on successful registration', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/dashboard');
  });
});
