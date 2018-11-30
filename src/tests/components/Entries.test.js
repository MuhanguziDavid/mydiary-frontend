import React from 'react';
import { shallow } from 'enzyme';
import { Entries } from '../../components/entries/Entries';

describe('Entries Component', () => {
  let wrapper;
  const fetchEntries = jest.fn();
  const setLoginToTrue = jest.fn();
  const entriesPayload = [{ entry: 1 }];
  const props = {
    history: { push: jest.fn() },
  };
  const nextProps = {
    getEntriesError: true,
  };

  beforeEach(() => {
    wrapper = shallow(
      <Entries
        fetchEntries={fetchEntries}
        setLoginToTrue={setLoginToTrue}
        entriesPayload={entriesPayload}
        {...props}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not redirect if getEntriesError is false', () => {
    wrapper.setProps({ getEntriesError: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect to the landingpage if getEntriesError is true', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/');
  });
});
