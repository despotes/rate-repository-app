import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password must be at least 3 characters long')
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(
      `username:\t ${values.username}\npassword:\t ${values.password}`
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
