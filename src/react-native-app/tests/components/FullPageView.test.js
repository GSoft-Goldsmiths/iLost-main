import React from 'react';
import FullPageView from '../../src/components/FullPageView';
import {shallow} from 'enzyme';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = <FullPageView text="title"  buttonHandler={()=>{}} buttonText="button"/>;
  const rendered = renderer.create(component).toJSON();
  expect(rendered).toBeTruthy();

});
