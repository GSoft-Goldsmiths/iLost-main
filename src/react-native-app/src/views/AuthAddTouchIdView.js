import React from 'react';
import { AsyncStorage, Button, Image, Text, View } from 'react-native';

import { color, fullPageView, style } from '../styles/variables';
import BTN from '../components/Button';

export default class AuthAddTouchIdView extends React.Component {

  constructor(props) {
    super(props);
  }

  _setTouchId = async () => {
    // setup permission
    try {
      const user = { auth: { useTouchId: true } };
      await AsyncStorage.mergeItem('user', JSON.stringify(user));
      this.props.navigation.navigate('AuthFinished');
    } catch (error) {
      console.log(error);
    }
  };

  _skipTouchId = async () => {
    try {
      const user = { auth: { useTouchId: false } };
      await AsyncStorage.mergeItem('user', JSON.stringify(user));
      this.props.navigation.navigate('AuthFinished');
    } catch (error) {
      console.log(error);
    }
  };

  render() {

    const title = 'Just one more step!';
    const subtitle = 'If you forget the passcode, you can\n' +
      ' always use touch ID to unlock it, but first we ' +
      'need your permission to set it up.';
    return (
      <View style={style.container}>
        <Image
          style={fullPageView.image}
          source={require('../../assets/images/icons/fingerprint.png')}
        />
        <Text style={fullPageView.title}>{title}</Text>
        <Text style={fullPageView.subtitle}>{subtitle}</Text>
        <BTN handler={() => this._setTouchId()} text="OK"/>
        <Button
          title="SKIP"
          color={color.main}
          onPress={() => this._skipTouchId()}
        />
      </View>
    );
  }

}
