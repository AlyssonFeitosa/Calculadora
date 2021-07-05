/* eslint-disable import/no-named-as-default */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import App from '../App';

// Note: test renderer must be required after react-native.

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  renderer.create(<App />);
});
