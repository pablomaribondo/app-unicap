import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { PRIMARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';
import reducer from '../reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
  },
});

export default function() {
  const { useEffect, useState } = React;
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <View store={createStore(reducer)}>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <HomeHeader />
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
