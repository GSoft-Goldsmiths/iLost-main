import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../../src/components/Button';

configure({ adapter: new Adapter() });


describe('<Button />', ()=>{
  it('renders without crashing', () => {
    const rendered = renderer.create(<Button text="title" handler={() => {}}/>).
      toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it('renders with correct elements', () => {
    const wrapper = shallow(<Button text="title" handler={() => {}}/>);
    expect(wrapper.find(Text).exists()).toBeTruthy();
    expect(wrapper.find(TouchableHighlight).exists()).toBeTruthy();
  });

  it('renders with correct props', () => {
    const wrapper = shallow(<Button text="title" handler={() => { testData =  "button is pressed"; }}/>);
    const text = wrapper.find(Text);
    expect(text.props().children).toEqual("title");
  });

  it('the button handler should work if the button is pressed', () => {
    let testData = "before button is pressed";
    const wrapper = shallow(<Button text="title" handler={() => { testData =  "button is pressed"; }}/>);
    wrapper.find(TouchableHighlight).simulate('press');
    expect(testData).toEqual("button is pressed");
  });
});

