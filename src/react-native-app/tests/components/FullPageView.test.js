import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { Image, Text, View } from 'react-native';

import FullPageView from '../../src/components/FullPageView';
import Button from '../../src/components/Button';

configure({ adapter: new Adapter() });

describe('<FullPageView />', ()=>{
  
  it('renders without crashing', () => {
    const rendered = renderer.create(<FullPageView text="title"  buttonHandler={()=>{}} buttonText="button"/>).
      toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it('renders correct elements', () => {
    const wrapper = shallow(<FullPageView text="title" subtitle="subtitle" buttonHandler={()=>{}} buttonText="button"/>);
    expect(wrapper.find(View).exists()).toBeTruthy();
    expect(wrapper.find(View).length).toEqual(1);
    expect(wrapper.find(Image).exists()).toBeTruthy();
    expect(wrapper.find(Image).length).toEqual(1);
    expect(wrapper.find(Text).exists()).toBeTruthy();
    expect(wrapper.find(Text).length).toEqual(2);
    expect(wrapper.find(Button).exists()).toBeTruthy();
    expect(wrapper.find(Button).length).toEqual(1);
  });
});

