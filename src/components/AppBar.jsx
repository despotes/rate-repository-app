import React from 'react';
import { View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    paddingHorizontal: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
