import React from 'react';
import { AsyncStorage, Button, FlatList, View, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ItemListCell } from '../components/ItemListCell';
import { style } from '../styles/variables';
import { sampleItemList } from '../contents/sampleData';

class ItemListView extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const rightButtonHandler = () => navigation.navigate('AddItemModal', {
      id: 123,
    });
    return {
      title: 'Item List',
      headerRight: (
        <Button onPress={rightButtonHandler} title="＋" color="#fff"/>
      ),
      headerBackTitle: null,
    };
  };

  _listCellButtonHandler = (name, itemId) => {
    this.props.navigation.navigate('ItemDetail', { name, itemId });
  };

  _signOutAsync = async () => {
    await AsyncStorage.setItem('userToken', '');
    this.props.navigation.navigate('AuthLoading');
  };

  _resetPasswordAsync = async () => {
    await AsyncStorage.clear();
    this._signOutAsync();
  };

  render() {
    return (
      <View
        style={style.container}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={sampleItemList}
          renderItem={({ item: { name, id, imageSource } }) => (
            <ItemListCell
              imageSource={imageSource}
              name={name}
              itemPressHandler={this._listCellButtonHandler}
              id={id}
            />
          )}
        />
        <Button
          title="Sign out"
          onPress={this._signOutAsync}
        />
        <Button
          title="reset account"
          onPress={this._resetPasswordAsync}
        />
      </View>

    );
  }
}

export default withNavigation(ItemListView);