import React from 'react';
import { Button, Text, View } from 'react-native';
import { style } from '../styles/variables';

export default class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : 'item name',
    };

  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const name = params ? params.name : null;

    return (
      <View style={style.container}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>item Name: {JSON.stringify(name)}</Text>
      </View>
    );
  }
}