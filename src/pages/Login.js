import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/Forms/Login';
import { NAVY_BLUE, PURPLE } from '../utils/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    heigth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: NAVY_BLUE,
  },
});

function Login() {
  return (
    <View style={styles.container}>
      <View style={{ width: '20vh', height: '20vh', backgroundColor: PURPLE }} />
      <LoginForm />
    </View>
  );
}

export default Login;
