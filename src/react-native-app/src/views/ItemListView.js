import React from 'react';
import {
  ActionSheetIOS,
  AsyncStorage,
  FlatList,
  View,
  AlertIOS,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { ItemListCell } from '../components/ItemListCell';
import { color, mainFontBold, style } from '../styles/variables';
import { Icon } from 'react-native-elements';

class ItemListView extends React.Component {

  static willFocusSubscription;

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const rightButtonHandler = () => navigation.navigate('EditItemModal', {
      type: 'add',
    });

    const leftButtonLongPressHandler = () => {

      // show actions
      ActionSheetIOS.showActionSheetWithOptions({
          options: ['Cancel', 'Sign Out', 'Reset App'],
          cancelButtonIndex: 0,
          destructiveButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) { params.signOut(); }
          if (buttonIndex === 2) { params.resetAccount(); }
        });
    };

    return {
      title: 'Item List',
      headerRight: (
        <Icon
          name="plus"
          type="entypo"
          underlayColor="transparent"
          onPress={rightButtonHandler}
          color={color.main}
          iconStyle={{ paddingHorizontal: 10 }}
        />
      ),
      headerLeft: (
        <Icon
          name="menu"
          type="ionicons"
          underlayColor="transparent"
           onPress={leftButtonLongPressHandler}
          onLong
          color={color.main}
          iconStyle={{ paddingHorizontal: 10 }}
        />
      ),
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 5,
      },
      headerTintColor: color.main,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: mainFontBold,
        fontSize: 20,
        paddingTop: 20,
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      refreshing: false,
    };
  }

  componentWillMount = () => {
    const { navigation } = this.props;
    navigation.setParams({ refresh: this._refreshItemList});
    navigation.setParams({ resetAccount: this._resetAccountAsync });
    navigation.setParams({ signOut: this._signOutAsync });
    this.willFocusSubscription = navigation.addListener('willFocus',
      () => this._refreshItemList());

    AlertIOS.alert("We have prepare the sample data for you to run the test.")
  };

  componentDidUnMount = () => {
    this.willFocusSubscription.remove();
  };

  _refreshItemList = async () => {
    try {
      this.setState({ refreshing: true });
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user) this.setState({ items: user.items });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ refreshing: false });
    }
  };

  _listCellClickHandler = (name, id, locations, imageSource, index) => {
    const payload = { name, id, locations, imageSource, index };
    this.props.navigation.navigate('ItemDetail', payload);
  };

  _signOutAsync = async () => {
    const user = { auth: { userToken: '' } };
    await AsyncStorage.mergeItem('user', JSON.stringify(user));
    this.props.navigation.navigate('AuthLoading');
  };

  _resetAccountAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
  };

  render() {
    return (
      <View style={style.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this._refreshItemList}
          showsVerticalScrollIndicator={false}
          data={this.state.items}
          renderItem={({ item: { name, id, image, locations }, index }) => (
            <ItemListCell
              index={index}
              locations={locations}
              imageSource={image}
              name={name}
              cellPressHandler={this._listCellClickHandler}
              id={id}
              keyExtractor={(item, index) => item.name}
            />
          )}
        />
      </View>

    );
  }
}

export default withNavigation(ItemListView);