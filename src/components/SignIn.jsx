import React from 'react';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(
      `username:\t ${values.username}\npassword:\t ${values.password}`
    );
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
