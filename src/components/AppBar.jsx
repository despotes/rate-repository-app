import React from 'react';
import { View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const PADDING = 20;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + PADDING,
    paddingBottom: PADDING,
    paddingHorizontal: PADDING,
    backgroundColor: theme.colors.textPrimary,
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
