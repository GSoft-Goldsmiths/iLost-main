import React from 'react';
import { AsyncStorage, Button, FlatList, View, } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ItemListCell } from '../components/ItemListCell';
import { style } from '../styles/variables';

class ItemListView extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const rightButtonHandler = () => navigation.navigate('AddItemModal', {
      id: 123,
    });
    return {
      title: 'HOMEY',
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
    const itemListData = [
      {
        key: 0,
        name: 'school bag',
        id: 0,
        imageSource: require('../../assets/images/sampleItems/sample1.jpg'),
      },
      {
        key: 1,
        name: 'traveling bag',
        id: 1,
        imageSource: require('../../assets/images/sampleItems/sample2.jpg'),
      },
      {
        key: 2,
        name: 'another bag',
        id: 2,
        imageSource: require('../../assets/images/sampleItems/sample3.jpg'),
      },
    ];

    return (
      <View
        style={style.container}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemListData}
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