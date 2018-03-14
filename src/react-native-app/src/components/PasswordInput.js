import React from 'react';
import { Image, Text, TextInput } from 'react-native';
import { color, fullPageView, mainFontBold } from '../styles/variables';

export default ({
                  value,
                  message,
                  placeholder,
                  handleTextChange,
                  handleSubmit,
                  imageSource,
                  title,
                  imageStyle,
                }) => {

  const Title = title
    ? <Text key="title" style={styles.title}>{title}</Text>
    : null;

  return [
    <Image
      key='image'
      style={{ ...fullPageView.image, ...imageStyle }}
      source={imageSource}
    />,
    Title,
    <TextInput
      key="textInput"
      ref={input => this._input = input}
      caretHidden
      autoFocus
      maxLength={4}
      keyboardType="numeric"
      style={styles.textInput}
      secureTextEntry={true}
      onChangeText={(text) => handleTextChange(text)}
      placeholder={placeholder}
      value={value}
      onSubmitEditing={(text) => handleSubmit(text)}
      onFocus={() => {console.log('It\'s focused now');}}
    />,
    <Text
      key='message'
      style={styles.message}>
      {message}
    </Text>,
  ];
}

const styles = {
  title: {
    ...fullPageView.title,
    fontSize: 20,
    fontFamily: mainFontBold,
    textAlign: 'center',
  },
  textInput: { height: 40, textAlign: 'center', fontSize: 20 },
  message: { color: color.danger, textAlign: 'center' },
};