import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Register } from '../../components/register/Register';

describe('Register component', () => {
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
  const registerUsers = jest.fn();
  const props = {
    history: { push: jest.fn() },
  };
  const nextProps = {
    registerSuccess: true,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<Register
      registerUsers={registerUsers}
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

  it('should call registerUsers when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(registerUsers).toBeCalled();
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

  it('should not redirect if registerUsers is false', () => {
    wrapper.setProps({ registerUsers: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect to the dashboard on successful registration', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/dashboard');
  });
});
