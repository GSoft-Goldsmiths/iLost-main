import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { color, mainFontBold } from '../styles/variables';

export const ItemListCell = ({
                               name,
                               cellPressHandler,
                               id,
                               imageSource,
                               locations,
                               index,
                             }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <TouchableOpacity
        onPress={() => cellPressHandler(name, id, locations, imageSource,
          index)}
        style={style.container}
      >
        <View style={style.textContainer}>
          <Text style={style.text}>{name}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            resizeMode="cover"
            style={style.image}
            source={{ uri: imageSource, isStatic: true }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const cellHeight = height / 2;
const cellWidth = width * 0.8;

const style = {
  container: {
    height: cellHeight,
    marginVertical: 20,
    borderRadius: 25,
    flex: 1,
    backgroundColor: color.background,
    flexDirection: 'column-reverse',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 20,
    color: color.main,
    fontFamily: mainFontBold,
    right: 5,
    bottom: 5,
    textAlign: 'right',
  },
  imageContainer: {
    flex: 5,
    height: cellHeight,
    maxWidth: cellWidth,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    maxWidth: cellWidth,
    width: cellWidth,
  },
};