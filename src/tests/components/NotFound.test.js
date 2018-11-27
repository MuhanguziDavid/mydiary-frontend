import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '../../components/notFound/NotFound';

describe('NotFound component', () => {
  it('it should render correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
})
