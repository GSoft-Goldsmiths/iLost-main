import React from 'react';
import renderer from 'react-test-renderer';

import ItemDetailView from '../../src/views/ItemDetailView ';

it('renders without crashing', () => {
  const rendered = renderer.create(<ItemDetailView />).toJSON();
  expect(rendered).toMatchSnapshot();
});
