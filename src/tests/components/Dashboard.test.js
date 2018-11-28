import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';

describe('Dashboard component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
