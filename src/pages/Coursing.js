import React from 'react';
import { StyleSheet, View } from 'react-native';
import { loadAsync } from 'expo-font';
import { PRIMARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';
import CoursingSubjects from '../components/Lists/CoursingSubjects';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
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
        <View  style={styles.container}>
          <HomeHeader />
          <CoursingSubjects />
        </View>
      )}
    </View>
  );
}
