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
});
