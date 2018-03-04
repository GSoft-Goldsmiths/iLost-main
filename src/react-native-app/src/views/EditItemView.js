import React from 'react';
import { Button, Text, View } from 'react-native';

export default class EditItemView extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.name : 'Item Name',
    };

  };

  _saveButtonHandler = () => {
    alert("item is edited!");
    //this.props.navigation.setParams({ otherParam: 'updated' });
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const { name, id, imageURL } = params ? params.item : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>id: {JSON.stringify(id)}</Text>
        <Text>name: {JSON.stringify(name)}</Text>
        <Button
          title="SAVE"
          onPress={this._saveButtonHandler}
        />
      </View>
    );
  }
}