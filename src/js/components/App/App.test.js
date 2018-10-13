import React from 'react';
import App from './App';

describe('App', () => {

  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

});
