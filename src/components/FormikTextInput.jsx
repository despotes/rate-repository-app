import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import theme from '../theme';
import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.danger,
  },
  marginBot1: {
    marginBottom: 5,
  },
  marginBot2: {
    marginBottom: 10,
  },
  marginBot3: {
    marginBottom: 15,
  },
});

const FormikTextInput = ({ name, style, mB, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const formikInputContainerStyle = [
    mB === 'small' && styles.marginBot1,
    mB === 'medium' && styles.marginBot2,
    mB === 'large' && styles.marginBot3,
  ];

  return (
    <View style={formikInputContainerStyle}>
      <TextInput
        onChangeText={(text) => helpers.setValue(text)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={style}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
