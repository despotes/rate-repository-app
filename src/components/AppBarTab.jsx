import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
});

const AppBarTab = ({ text, ...props }) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <Text
        color="white"
        fontSize="subheading"
        fontWeight="bold"
        style={styles.container}
      >
        {text}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
