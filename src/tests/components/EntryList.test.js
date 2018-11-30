import React from 'react';
import { shallow } from 'enzyme';
import EntryList from '../../components/entries/EntryList';

describe('EntryList Component', () => {
  let wrapper;
  const entries = [{ entry: 1 }];

  beforeEach(() => {
    wrapper = shallow(
      <EntryList entries={entries} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
