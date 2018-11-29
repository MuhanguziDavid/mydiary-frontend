import React from 'react';
import { shallow } from 'enzyme';
import EntryForm from '../../components/entries/EntryForm';

describe('SingleArticle Component', () => {
  let wrapper;
  const entry = {};

  beforeEach(() => {
    wrapper = shallow(
      <EntryForm entry={entry} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
