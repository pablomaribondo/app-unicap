import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadAsync } from 'expo-font';
import { PRIMARY } from './src/utils/colors';
import HomeHeader from './src/components/HomeHeader';
import reducer from './src/reducer';
import DaySelector from './src/components/DaySelector';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

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
    <Provider store={createStore(reducer)}>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <HomeHeader />
          <DaySelector />
        </KeyboardAvoidingView>
      )}
    </Provider>
  );
}
