import React from 'react';
import 'react-native';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import App from '../src/App';

jest.useFakeTimers();

describe('App', () => {
  it('renders correctly', async () => {
    renderer.create(<App />);
    await act(async () => {});
  });

  it('matches snapshot', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
    await act(async () => {});
  });
});
