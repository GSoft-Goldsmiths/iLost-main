import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default class AddItemView extends React.Component {

  static navigationOptions = () => {
    return { title: 'New Item' };
  };

  _addImage = () => {
    alert('Add a new image');
  };

  _saveButtonHandler = () => {
    alert('item is saved');
    //this.props.navigation.setParams({ otherParam: 'updated' });
  };

  render() {
    const { params } = this.props.navigation.state;
    /* 2. Read the params from the navigation state */
    const id = params ? params.id : null;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>add a new image here</Text>
        <Text>{id || 'no id'}</Text>
        <TextInput/>
        <Button
          title="Add a new image"
          onPress={this._addImage}
        />
        <Button
          title="SAVE"
          onPress={this._saveButtonHandler}
        />
      </View>
    );
  }
}