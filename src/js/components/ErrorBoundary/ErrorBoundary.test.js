import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should be defined', () => {
    expect(ErrorBoundary).toBeDefined();
  });
  it('should render children', () => {
    const wrapper = shallow(
      <ErrorBoundary><div>children</div></ErrorBoundary>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render children if error', () => {
    const wrapper = shallow(
    <ErrorBoundary><div>children{() => {throw new Error('error');}}</div></ErrorBoundary>);
    expect(wrapper).toMatchSnapshot();
  });
});