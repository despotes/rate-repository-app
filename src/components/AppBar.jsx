import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

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
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab} text="Repositories" />
        <Link to="/sign-in" component={AppBarTab} text="Sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
