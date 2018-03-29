import React from 'react';
import renderer from 'react-test-renderer';

import ItemListView from '../../src/views/ItemListView ';

it('renders without crashing', () => {
  const rendered = renderer.create(<ItemListView />).toJSON();
  expect(rendered).toMatchSnapshot();
});
