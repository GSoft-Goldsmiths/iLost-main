import React from 'react';
import {
  AlertIOS,
  AsyncStorage,
  Dimensions,
  Image,
  ImagePickerIOS,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

import {
  color,
  fullPageView,
  mainFont,
  mainFontBold,
  style,
} from '../styles/variables';
import Button from '../components/Button';

export default class EditItemView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      photoURI: null,
      itemName: '',
      // type = ['add', edit']
      type: 'add',
    };
  }

  componentWillMount() {
    const { name, id, imageSource, type = 'add' } = this.props.navigation.state.params;
    this.setState({
      id,
      type,
      itemName: name,
      photoURI: imageSource,
    });
  }

  componentWillUpdate(nextProps, nextState, nextContext) {

  }

  componentWillReceiveProps(nextProps, nextContext) {

  }

  _addImage = () => {
    ImagePickerIOS.openSelectDialog({},
      (uri) => {
        this.setState({ photoURI: uri });
      },
      () => {
        console.log('handle selecting cancel here');
      });
  };

  _handleTextInputChange = (text) => {
    this.setState({ itemName: text });
  };

  _saveButtonHandler = async () => {

    if (this._isInputsValidated()) {
      try {
        const { index } = this.props.navigation.state.params;
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        if (user) {
          if (this.state.type === 'edit') {
            user.items[index] = {
              ...user.items[index],
              name: this.state.itemName,
              image: this.state.photoURI,
            };
          } else {
            const newItem = {
              id: user.items.length + 1,
              trackerID: user.items.length + 1,
              name: this.state.itemName,
              image: this.state.photoURI,
              locations: [],
            };
            user.items = [newItem, ...user.items];
          }
          await AsyncStorage.mergeItem('user', JSON.stringify(user));
          this.props.navigation.goBack();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  _isInputsValidated = () => {
    if (!this.state.photoURI) {
      AlertIOS.alert('Please add a new photo of your item');
      return false;
    }

    if (!this.state.itemName) {
      AlertIOS.alert('Please add a name for your item');
      return false;
    }
    return true;
  };

  render() {
    const { photoURI, itemName, type } = this.state;
    const { height, width } = Dimensions.get('window');
    const title = type === 'edit' ? 'Edit Item' : 'Add Item';
    const imageProfile = photoURI ? (
      <TouchableWithoutFeedback onPress={() => this._addImage()}>
        <Image style={styles.image} source={{ uri: photoURI }}/>
      </TouchableWithoutFeedback>
    ) : (
      <Icon
        color="#fff"
        name="camera"
        size={width / 7}
        type="font-awesome"
        containerStyle={styles.image}
        onPress={() => this._addImage()}
      />
    );

    return (
      <KeyboardAwareScrollView style={styles.container} extraHeight={200}>
        <View style={{ flex: 3, alignItems: 'center', paddingBottom: 80 }}>
          <Text style={styles.title}>{title}</Text>

          {imageProfile}

          <TextInput
            placeholder="Enter name here"
            onChangeText={(text) => this._handleTextInputChange(text)}
            maxLength={16}
            value={itemName}
            style={styles.textInput}
            returnKeyLabel="DONE"
          />

        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Button
            text="OK"
            handler={() => this._saveButtonHandler()}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.cancelButton}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = {
  container: {
    minHeight: height,
    backgroundColor: '#9a9',
    ...style.container,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fullPageView.title,
  },
  textInput: {
    borderBottomColor: color.main,
    borderBottomWidth: 1,
    fontFamily: mainFont,
    fontSize: 20,
    textAlign: 'center',
    width: width * 0.5,
    color: color.main,
  },
  image: {
    borderRadius: width / 5,
    width: width / 2.5,
    height: width / 2.5,
    marginTop: 50,
    backgroundColor: '#bbb',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexShrink: 1,
  },
  cancelButton: {
    fontFamily: mainFontBold,
    color: color.main,
    fontSize: 14,
    textAlign: 'center',
  },
};