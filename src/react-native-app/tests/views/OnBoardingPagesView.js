import React from 'react';
import renderer from 'react-test-renderer';

import OnBoardingPagesView from '../../src/views/OnBoardingPagesView';

it('renders without crashing', () => {
  const rendered = renderer.create(<OnBoardingPagesView />).toJSON();
  expect(rendered).toBeTruthy();
});
