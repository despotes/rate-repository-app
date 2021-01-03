import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.lightgray,
    borderRadius: 5,
    fontSize: theme.fontSizes.body,
  },
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.container, style];
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
