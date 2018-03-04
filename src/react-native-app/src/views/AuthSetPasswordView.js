import React from 'react';
import {
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { fullPageView, style, } from '../styles/variables';
import PasswordInput from '../components/PasswordInput';

export default class AuthSetPasswordView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'enterPassword',
      password: '',
      reEnterPassword: '',
      message: null,
    };
  }

  _setPasswordAsync = async () => {
    const updatingDate = [
      ['isRegistered', 'true'],
      ['password', this.state.password],
      ['userToken', String(Date.now())],
    ];
    try {
      await AsyncStorage.setItem('isRegistered', 'true');
      await AsyncStorage.setItem('password', this.state.password);
      await AsyncStorage.setItem('userToken', String(Date.now()));
      this.props.navigation.navigate('AddTouchId');

    } catch (error) {
      console.log(error);

    }
  };

  componentWillUpdate(nextProps, nextState) {

    if (nextState.stage === 'done') {
      console.log('is done');
      this._setPasswordAsync();
    }

    // in the set password stage
    if (this.state.stage === 'enterPassword') {
      if (nextState.password.length === 4) {
        this.setState({ stage: 'reEnterPassword' });
      }
    }

    // in the set re-enter password stage
    if (this.state.stage === 'reEnterPassword') {
      if (nextState.reEnterPassword.length === 4) {

        // if both passwords are the same
        if (nextState.reEnterPassword === this.state.password) {
          console.log('passwords are same');
          this.setState({ stage: 'done', reEnterPassword: '' });
        } else {

          // if passwords aren't the same, reset it again.
          this.setState({
            stage: 'enterPassword',
            password: '',
            reEnterPassword: '',
            message: 'Passcodes don\'t matched \:(',
          });
        }
      }
    }


  }

  _handleChangeText = (text) => {
    if (this.state.stage === 'enterPassword') {
      this.setState({ password: text });
    } else {
      this.setState({ reEnterPassword: text });
    }
  };

  render() {

    const { stage, message, password, reEnterPassword } = this.state;

    const title = stage === 'enterPassword'
      ? 'Enter 4-digit passcode'
      : 'Re-enter 4-digit passcode';

    const textInputValue = stage === 'enterPassword'
      ? password : reEnterPassword;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            ...style.container,
            ...fullPageView.withKeyboardContainer,
          }}>
          <PasswordInput
            title={title}
            imageSource={require('../../assets/images/icons/lock.png')}
            imageStyle={fullPageView.image_sm}
            placeholder="◯ ◯ ◯ ◯"
            handleTextChange={this._handleChangeText}
            value={textInputValue}
            message={this.state.message}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
