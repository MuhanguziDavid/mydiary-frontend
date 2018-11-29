import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from '../../components/landingPage/LandingPage';

describe('LandingPage component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
