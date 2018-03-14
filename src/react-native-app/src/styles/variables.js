import { StyleSheet } from 'react-native';

export const color = {
  main: '#0093A8',
  light: '#00D3F3',
  bright: '#DDF1F4',
  dark: '#23454E',
  danger: '#C00',
  background: '#fff',
};

export const mainFont = 'Caviar Dreams';
export const mainFontBold = 'Caviar Dreams Bold';

// general view
export const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    paddingHorizontal: 20,
  },
  button: {
    height: 36,
    width: 90,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.main,
  },
};

export const text = {
  fontFamily: mainFont,
};

export const fullPageView = {
  withKeyboardContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 90,
  },
  title: {
    ...text,
    color: color.main,
    fontSize: 30,
    marginBottom: 15,
  },
  subtitle: {
    ...text,
    color: color.main,
    fontSize: 15,
    fontWeight: '500',
  },
  image: { width: 145, height: 145, marginBottom: 20 },
  image_sm: { width: 80, height: 110, marginBottom: 10 },
};
