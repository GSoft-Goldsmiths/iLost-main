import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import { ItemListCell } from '../../src/components/ItemListCell';

configure({ adapter: new Adapter() });

describe('<ItemListCell />', ()=>{
  
  it('renders without crashing', () => {
    const rendered = renderer.create(<ItemListCell 
      index={0}
      name="item name" 
      cellPressHandler={()=>{}} 
      id={123} 
      imageSource="source" 
      locations={[]} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it('renders correct elements', () => {
    const wrapper = shallow(<ItemListCell 
      index={0}
      name="item name" 
      cellPressHandler={()=>{}} 
      id={123} 
      imageSource="source" 
      locations={[]} />);
    expect(wrapper.find(View).exists()).toBeTruthy();
    expect(wrapper.find(View).length).toEqual(3);
    expect(wrapper.find(Image).exists()).toBeTruthy();
    expect(wrapper.find(Image).length).toEqual(1);
    expect(wrapper.find(Text).exists()).toBeTruthy();
    expect(wrapper.find(Text).length).toEqual(1);
    expect(wrapper.find(TouchableOpacity).exists()).toBeTruthy();
    expect(wrapper.find(TouchableOpacity).length).toEqual(1);
  });
});

