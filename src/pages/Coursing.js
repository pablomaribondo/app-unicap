import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { View } from 'native-base';
import { loadAsync } from 'expo-font';
import { PRIMARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';
import DaySelector from '../components/DaySelector';
import CoursingSubjects from '../components/Lists/CoursingSubjects';

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
    await loadAsync({
      'varela-round': require('../../assets/VarelaRound-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <View>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <HomeHeader />
          <DaySelector />
          <CoursingSubjects />
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
