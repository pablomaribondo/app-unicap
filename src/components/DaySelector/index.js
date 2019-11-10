/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { elevationShadowStyle } from '../../utils/shadows';
import { WHITE, GRAY, ACTION } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: WHITE,
    borderRadius: 22,
    marginVertical: 22,
    ...elevationShadowStyle(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    padding: 3,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'varela-round',
    color: ACTION,
    fontSize: 24,
  },
  dayText: {
    color: ACTION,
    paddingHorizontal: 18,
    fontSize: 18,
  }
});

function DaySelector() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <Image source={require('../../../assets/left-arrow.png')} resizeMode="center" />
        </View>
        <Text style={styles.dayText}>Segunda</Text>
        <View style={styles.button}>
          <Image source={require('../../../assets/right-arrow.png')} resizeMode="center" />
        </View>
      </View>
    </View>
  );
}

export default DaySelector;
