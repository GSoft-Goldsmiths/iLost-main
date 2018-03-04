import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { mainFontBold } from '../styles/variables';

export const ItemListCell = ({ name, itemPressHandler, id, imageSource }) => (
  <TouchableOpacity
    onPress={() => itemPressHandler(name, id)}
    style={style.container}
  >

    <Image style={style.image} source={imageSource}/>
    <View style={style.textContainer}>
      <Text style={style.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

const cellHeight = 250;

const style = {
  container: {
    height: cellHeight,
    width: '100%',
    marginVertical: 20,
    borderRadius: 25,
    shadowColor: '#000',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  textContainer: {
    backgroundColor: '#efefef',
    height: 120,
    zIndex: 123,
  },
  text: {
    fontSize: 40,
    fontFamily: mainFontBold,
    right: 5,
    bottom: 5,
    textAlign: 'right',
  },
  image: {
    height: cellHeight,
    width: 'auto',
  },
};