import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import { fullPageView } from '../../src/styles/variables';
import PasswordInput from '../../src/components/PasswordInput';

configure({ adapter: new Adapter() });

describe('<ItemListCell />', ()=>{
  
  it('renders without crashing', () => {
    const rendered = renderer.create(
    <PasswordInput 
      value="text input value"
      message="displayed message"
      placeholder="text input placeholder"
      handleTextChange={()=>{ }}
      handleSubmit={()=>{ }}
      imageSource={{uri: "source"}}
      title="page title"
      imageStyle={fullPageView.Image}
      />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
});

