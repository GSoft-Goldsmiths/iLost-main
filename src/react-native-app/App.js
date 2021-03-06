import React from 'react';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { Font } from 'expo';

import ItemListView from './src/views/ItemListView';
import ItemDetailView from './src/views/ItemDetailView';
import EditItemView from './src/views/EditItemView';
import AuthSignInView from './src/views/AuthSignInView';
import AuthLoadingView from './src/views/AuthLoadingView';
import AuthSetPasswordView from './src/views/AuthSetPasswordView';
import OnBoardingPagesView from './src/views/OnBoardingPagesView';
import AuthAddTouchIdView from './src/views/AuthAddTouchIdView';
import AuthFinishedView from './src/views/AuthFinishedView';
import { color, mainFontBold } from './src/styles/variables';

/**
 * TODO: Use router instead of stack navigator
 */
const MainStack = StackNavigator(
  {
    ItemList: { screen: ItemListView, },
    ItemDetail: { screen: ItemDetailView, },
  },
  {
    initialRouteName: 'ItemList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: color.main,
        paddingHorizontal: 5,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: mainFontBold,
        fontSize: 20,
      },
    },
  },
);

const AppStack = StackNavigator(
  {
    Main: { screen: MainStack, },
    EditItemModal: { screen: EditItemView, },
  },
  {
    // TODO: delete this after finishing add item UI
    mode: 'modal',
    headerMode: 'none',
  },
);

const AuthStack = StackNavigator(
  {
    SetPassword: { screen: AuthSetPasswordView, },
    SignIn: { screen: AuthSignInView, },
    AddTouchId: { screen: AuthAddTouchIdView, },
    AuthFinished: { screen: AuthFinishedView, },
  },
  {
    mode: 'card',
    headerMode: 'none',
  },
);

const OnBoardingStack = StackNavigator(
  {
    OnBoarding: { screen: OnBoardingPagesView, },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const SwitchStack = SwitchNavigator(
  {
    AuthLoading: AuthLoadingView,
    App: AppStack,
    Auth: AuthStack,
    OnBoarding: OnBoardingStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };

    // prevent device rotated mess up Layout
    Expo.ScreenOrientation.allow(
      Expo.ScreenOrientation.Orientation.PORTRAIT_UP,
    );

  }

  /**
   * Render View after the fonts' are loaded
   */
  async componentDidMount() {
    await Font.loadAsync({
      'Caviar Dreams': require('./assets/fonts/CaviarDreams.ttf'),
      'Caviar Dreams Bold': require('./assets/fonts/CaviarDreams_Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <SwitchStack/> : null;
  }
}
