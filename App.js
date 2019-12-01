import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadAsync } from 'expo-font';
import { PRIMARY } from './src/utils/colors';
import Login from './src/pages/Login';
import reducer from './src/reducer';
import middleware from './src/middleware';
import CoursesTaken from './src/pages/CoursesTaken';

const store = createStore(reducer, middleware);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const MySwitchNavigator = createSwitchNavigator({
  login: Login,
  main: CoursesTaken,
});

const Container = createAppContainer(MySwitchNavigator);

export default function() {
  const { useEffect, useState } = React;
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await loadAsync({
      'varela-round': require('./assets/VarelaRound-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <Provider store={store}>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Container />
        </KeyboardAvoidingView>
      )}
    </Provider>
  );
}
