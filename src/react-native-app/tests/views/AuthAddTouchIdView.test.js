import React from 'react';
import renderer from 'react-test-renderer';

import AuthAddTouchIdView from '../../src/views/AuthAddTouchIdView';

it('renders without crashing', () => {
  const rendered = renderer.create(<AuthAddTouchIdView/>).toJSON();
  expect(rendered).toBeTruthy();
});
