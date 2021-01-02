import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';

const Count = ({ text, count }) => {
  const formattedCount = count > 1000 ? (count / 1000).toFixed(1) + 'k' : count;

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">
        {formattedCount}
      </Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
