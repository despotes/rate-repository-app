import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.spaceBottom}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.spaceBottom}
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          color="white"
          fontWeight="bold"
          fontSize="subheading"
          style={styles.buttonContainer}
        >
          Sign in
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    textAlign: 'center',
  },
  spaceBottom: {
    marginBottom: 10,
  },
});
