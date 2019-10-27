import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RED, WHITE, GREEN } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    color: WHITE,
    backgroundColor: RED,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: WHITE,
  },
  header: {
    position: 'relative',
    backgroundColor: GREEN,
    height: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    color: WHITE,
  },
});

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={[styles.center, { paddingTop: 5, alignSelf: 'center' }]}>
        JOSÉ ARTHUR SILVEIRA
      </Text>
      <Text style={[styles.center, { paddingTop: 5, alignSelf: 'center' }]}>201713009-1</Text>
    </View>
  );
}
