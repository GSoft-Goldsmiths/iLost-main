import React from 'react';
import PasswordInput from '../../src/components/PasswordInput';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PasswordInput/>).toJSON();
  expect(rendered).toBeTruthy();
});
