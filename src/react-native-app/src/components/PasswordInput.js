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

  const Title = title ? (
    <Text style={{
      ...fullPageView.title,
      fontSize: 20,
      fontFamily: mainFontBold,
      textAlign: 'center',
    }}>
      {title}
    </Text>
  ) : null;

  return [
    <Image
      key='image'
      style={{ ...fullPageView.image, ...imageStyle }}
      source={imageSource}
    />,
    <Text
      key='title'
      style={{
      ...fullPageView.title,
      fontSize: 20,
      fontFamily: mainFontBold,
      textAlign: 'center',
    }}>
      {title}
    </Text>
    ,
    <TextInput
      key='textInput'
      caretHidden
      autoFocus
      enablesReturnKeyAutomatically
      maxLength={4}
      keyboardType="numeric"
      style={{ height: 40, textAlign: 'center', fontSize: 20 }}
      secureTextEntry={true}
      onChangeText={(text) => handleTextChange(text)}
      placeholder={placeholder}
      value={value}
      onSubmitEditing={(text) => handleSubmit(text)}
    />,
    <Text
      key='message'
      style={{ color: color.danger, textAlign: 'center' }}>
      {message}
    </Text>,
  ];
}