import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import { style } from '../styles/variables';

export default class AuthLoadingView extends React.Component {

  constructor() {
    super();
    this._bootStrapAsync();
  }

  _bootStrapAsync = async () => {

    /**
     * onBoarding
     * -> register
     * -> touch ID or not
     * -> user data is built login
     * -> logout
     **/
    try {
      //const isOnBoarded = await AsyncStorage.getItem('isOnBoarded');
      let user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user) {
        console.log('is user');
        if (user.auth.isOnBoarded) {
          console.log('is on boarded');
          if (user.auth.isRegistered) {
            console.log('is registered');
            this.props.navigation.navigate(
              user.auth.userToken ? 'App' : 'Auth');
          } else {
            console.log('is not registered');
            this.props.navigation.navigate('SetPassword');
          }
        } else {
          console.log("is not on boarded");
          this.props.navigation.navigate('OnBoarding');
        }
      } else {
        console.log("No user");
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