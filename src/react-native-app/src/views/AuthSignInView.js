import React from 'react';
import {
  AsyncStorage,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { fullPageView, style } from '../styles/variables';
import PasswordInput from '../components/PasswordInput';
import Expo from 'expo';

export default class AuthSignInView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: null,
      isTouchIdChecked: false,
    };
  }

  async componentWillMount() {
    try {

      /**
       * if touch id is setup, use it as the first method to authenticate.
       */
      const useTouchId = await AsyncStorage.getItem('useTouchId');

      if (useTouchId === 'true') {
        const result = await Expo.Fingerprint.authenticateAsync(
          'Please authenticate to log in to iLost');
        if (result.success) {
          this._loginSucceedAsync();
        } else {
          this.setState({ isTouchIdChecked: true });
        }
      }else{
        this.setState({ isTouchIdChecked: true });
      }
    } catch (error) {
      console.log(error);
    }

  }

  /**
   * Execute if the user is authenticated.
   * navigate to AuthLoading if it's correct reset the password state
   */
  _loginSucceedAsync = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('AuthLoading');
    } catch (error) {
      console.log(error);
    }
  };

  _signInAsync = async () => {

    /**
     * check if password is correct
     */
    const registeredPassword = await AsyncStorage.getItem('password');
    if (registeredPassword === this.state.password) {
      this._loginSucceedAsync();
    } else {
      this.setState({ message: 'Incorrect Password', password: '' });
    }
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.password.length === 4) {
      this._signInAsync();
    }
  }

  _handleChangeText = (text) => {
    this.setState({ password: text });
  };

  render() {
    if (!this.state.isTouchIdChecked) return null;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{ ...style.container, ...fullPageView.withKeyboardContainer, }}>

          <PasswordInput
            imageSource={require('../../assets/images/icons/iLost.png')}
            value={this.state.password}
            placeholder="◯ ◯ ◯ ◯"
            handleTextChange={this._handleChangeText}
            handleSubmit={this._signInAsync}
            message={this.state.message}
            title="Enter 4-digit passcode"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
