import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    heigth: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    width: '100%',
    margin: 10,
    heigth: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    width: '100%',
    margin: 10,
  },
});

function TestsCalendar() {
  // Calendário de provas
  return <View style={styles.container}> </View>;
}

export default TestsCalendar;
