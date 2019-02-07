import React from 'react';
import { shallow } from 'enzyme';
import MovieDashboardPage from '../../components/MovieDashboardPage';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<MovieDashboardPage />);

  expect(wrapper).toMatchSnapshot();  
});
