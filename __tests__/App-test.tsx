import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
