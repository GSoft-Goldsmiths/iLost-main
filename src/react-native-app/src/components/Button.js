import React from 'react';
import { mainFontBold, style } from '../styles/variables';
import { Text, TouchableHighlight } from 'react-native';

export default ({ text, handler }) => (
  <TouchableHighlight
    style={style.button}
    onPress={() => handler()}
  >
    <Text style={{ color: '#fff', fontFamily: mainFontBold }}>{text}</Text>
  </TouchableHighlight>
);