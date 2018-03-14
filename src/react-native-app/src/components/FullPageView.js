import React from 'react';
import { fullPageView, style } from '../styles/variables';
import Button from './Button';
import { Image, Text, View } from 'react-native';

export default ({
                  containerStyle,
                  imageStyle,
                  imageSource,
                  title,
                  subtitle,
                  buttonText,
                  buttonHandler,
                }) => {

  return (
    <View style={style.container}>
      <Image
        style={fullPageView.image}
        source={imageSource}
      />
      <Text style={fullPageView.title}>{title}</Text>
      {subtitle ? <Text style={fullPageView.subtitle}>{subtitle}</Text> : null}
      <Button text={buttonText} handler={buttonHandler}/>
    </View>
  );
}