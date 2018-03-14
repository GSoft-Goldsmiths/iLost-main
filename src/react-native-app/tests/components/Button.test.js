import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../../src/components/Button';

it('renders without crashing', () => {
  const rendered = renderer.create(<Button text="title" handler={() => {}}/>).
    toJSON();
  expect(rendered).toBeTruthy();
});

it('renders with proper props', () => {
  const component = shallow(<Button text="title" handler={() => {}}/>);
  expect(component.text()).toEqual('title');
});