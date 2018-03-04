import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import Expo from 'expo';
import { style } from '../styles/variables';

export default class AuthLoadingView extends React.Component {

  constructor() {
    super();
    this._bootStrapAsync();
  }

  _bootStrapAsync = async () => {

    // onBoarding -> register -> login -> logout
    try {
      const isOnBoarded = await AsyncStorage.getItem('isOnBoarded');
      if (isOnBoarded) {
        console.log("is onboarded");
        const isRegistered = await AsyncStorage.getItem('isRegistered');
        if (isRegistered) {
          console.log("is registered");
          const userToken = await AsyncStorage.getItem('userToken');
          this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        } else {
          console.log("is not registered");
          this.props.navigation.navigate('SetPassword');
        }
      } else {
        this.props.navigation.navigate('OnBoarding');
      }
    } catch (error) {
      console.log(error);
    }

  };

  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}