import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/pages/Login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}
