import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import LoginForm from '../components/Forms/Login';
import { NAVY_BLUE } from '../utils/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: NAVY_BLUE,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Login() {
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <LoginForm />
    </KeyboardAvoidingView>
  );
}

export default Login;
