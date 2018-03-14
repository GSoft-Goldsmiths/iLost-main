import React from 'react';
import { ItemListCell }from '../../src/components/ItemListCell';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ItemListCell/>).toJSON();
  expect(rendered).toBeTruthy();
});
