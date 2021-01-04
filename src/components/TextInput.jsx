import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.lightgray,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  errorStyle: {
    borderColor: theme.colors.danger,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.container,
    styles.textStyle,
    error && styles.errorStyle,
    style,
  ];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
