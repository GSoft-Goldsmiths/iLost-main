import React from 'react';
import renderer from 'react-test-renderer';

import AuthFinishedView from '../../src/views/AuthFinishedView';

it('renders without crashing', () => {
  const rendered = renderer.create(<AuthFinishedView/>).toJSON();
  expect(rendered).toMatchSnapshot();
});
