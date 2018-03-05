import React from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableHighlight,
  View,
  Linking,
} from 'react-native';
import { color, mainFontBold, style } from '../styles/variables';
import Map from '../components/Map';
import Button from '../components/Button';
import { markers } from '../contents/sampleData';

export default class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.name : 'item name',
    };

  };

  constructor(props) {
    super(props);
    this.state = {
      markers,
      region: {
        ...markers[0].coordinate,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0421,
      },
    };
  }

  _updateRegion = (coordinate) => {
    this.setState({
      region: {
        ...this.state.region,
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      },
    });
  };

  _navigate = (itemName, coordinate) => {
    // dirflg=r, set default transport type to public transit
    Linking.openURL(`http://maps.apple.com/?daddr=${coordinate.latitude},${coordinate.longitude}&dirflg=r`);
  };

  render() {

    const { params } = this.props.navigation.state;
    const { itemId, name } = params ? params : {};
    const { markers, region } = this.state;

    return (
      <View style={{
        ...style.container,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 220,
      }}>
        <Map region={region} markers={markers}/>

        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={markers}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={<ListHeader title="Location History"/>}
          renderItem={({ index, item }) => {
            const { title = 't', description = 'desc', coordinate } = item;
            return <ListCell
              index={index}
              title={title}
              description={description}
              coordinate={coordinate}
              cellPressHandler={() => this._updateRegion(coordinate)}
              buttonPressHandler={() => this._navigate(name, coordinate)}
            />;
          }}
        />

      </View>
    );
  }
}

const ListHeader = ({ title = 'title' }) => (
  <View style={styles.listHeader.container}>
    <Text style={styles.listHeader.text}>{title}</Text>
  </View>
);

const ListCell = ({ index, title, description, coordinate, cellPressHandler, buttonPressHandler }) => (
  <TouchableHighlight
    key={index}
    underlayColor='#fff'
    onPress={() => cellPressHandler(coordinate)}
  >
    <View style={styles.listCell.container}>
      <View>
        <Text style={styles.listCell.title}>{title}</Text>
        <Text style={styles.listCell.description}>{description}</Text>
      </View>
      <Button
        style={styles.listCell.button}
        text="NAVIGATE"
        handler={() => buttonPressHandler()}
      />
    </View>
  </TouchableHighlight>
);

const { height, width } = Dimensions.get('window');

const styles = {
  flatList: {
    width: width,

  },
  listHeader: {
    container: {
      paddingHorizontal: 20,
      height: 30,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    text: {
      color: color.main,
      fontFamily: mainFontBold,
      fontSize: 20,
    },
  },
  listCell: {
    container: {
      paddingHorizontal: 20,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#CCC',
      borderBottomWidth: .5,
    },
    title: {
      fontSize: 20,
      color: color.dark,
    },
    description: {
      fontSize: 14,
      color: '#555',
    },
  },
};