import React from 'react';
import renderer from 'react-test-renderer';

import AuthSetPasswordView from '../../src/views/AuthSetPasswordView';

it('renders without crashing', () => {
  const rendered = renderer.create(<AuthSetPasswordView/>).toJSON();
  expect(rendered).toBeTruthy();
});
