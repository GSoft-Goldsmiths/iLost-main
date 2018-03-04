import React from 'react';

import FullPageView from '../components/FullPageView';

export default ({navigation}) => {
  const _buttonHandler = ()=>{
    navigation.navigate('AuthLoading');
  };
  return (
    <FullPageView
      imageSource={require('../../assets/images/icons/fireworks.png')}
      title="Congratulations"
      subtitle={"Everything is setting up now, let\'s start!"}
      buttonText="START"
      buttonHandler={_buttonHandler}
    />
  );
}