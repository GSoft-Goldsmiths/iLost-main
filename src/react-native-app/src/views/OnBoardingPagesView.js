import React from 'react';
import { AsyncStorage, Image, Text, View, } from 'react-native';
import { Pages } from 'react-native-pages';
import { color, fullPageView, style } from '../styles/variables';
import Button from '../components/Button';

const Page = ({ uri, title, text, buttonHandler }) => {
  const button = !buttonHandler ? null :
    <Button handler={buttonHandler} text="START"/>;
  return (
    <View style={style.container}>
      <Image
        style={fullPageView.image}
        source={uri}
      />
      <Text style={fullPageView.title}>{title}</Text>
      <Text style={fullPageView.subtitle}>{text}</Text>
      {button}
    </View>
  );
};

export default class OnBoardingPagesView extends React.Component {
  constructor(props) {
    super(props);
  }

  _navigateToSetPassword = async () => {
    try {
      await AsyncStorage.setItem('isOnBoarded', 'true');
      this.props.navigation.navigate('AuthLoading');
    } catch (error) {
      console.log(error);
    }
  };

  render() {

    const pages = {
      first: <Page
        uri={require('../../assets/images/icons/iLost.png')}
        title="iLost"
        text="Lorem ipsum dolor sit amet, coetur adipiscing elit, sed do eiusmod tempor i ncididunt"
      />,
      second: <Page
        uri={require('../../assets/images/icons/tracker.png')}
        title="Never lose anything"
        text="Lorem ipsum dolor sit amet, coetur adipiscing elit, sed do eiusmod tempor i ncididunt"
      />,
      third: <Page
        buttonHandler={this._navigateToSetPassword}
        uri={require('../../assets/images/icons/heart.png')}
        title="Made with love"
        text="Lorem ipsum dolor sit amet, coetur adipiscing elit, sed do eiusmod tempor i ncididunt"
      />,
    };

    return (
      <Pages
        indicatorColor={color.main}
        containerStyle={{
          backgroundColor: color.background,
        }}
      >
        {pages.first}
        {pages.second}
        {pages.third}
      </Pages>
    );
  }
}