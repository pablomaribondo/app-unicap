/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { PRIMARY, PRIMARY_DARK, SECONDARY_DARKER } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    borderBottomWidth: 1,
    borderBottomColor: SECONDARY_DARKER,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  room: {
    borderRadius: 4,
    backgroundColor: PRIMARY_DARK,
    padding: 4,
    marginRight: 8,
  },
  roomText: {
    fontFamily: 'varela-round',
    color: 'white',
  },
  text: {
    fontFamily: 'varela-round',
    color: 'white',
  },
  subjectLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  subjectTests: {
    flexDirection: 'row',
    marginTop: 16,
  },
  subjectTest: {
    flex: 1,
    marginRight: 14,
    borderWidth: 1,
    borderColor: PRIMARY_DARK,
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  testDescription: {
    fontFamily: 'varela-round',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  grade: {
    fontFamily: 'varela-round',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

function Subject({ subject }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>INF-1011</Text>
      <Text style={[styles.text, { fontSize: 22 }]}>Estrutura de dados II</Text>
      <View style={styles.subjectLocation}>
        <View style={styles.room}>
          <Text style={styles.roomText}>A606</Text>
        </View>
        <Text style={[styles.text]}>2a 13:00-14:40</Text>
      </View>
      <View style={styles.subjectTests}>
        <View style={styles.subjectTest}>
          <Text style={styles.roomText}>A606</Text>
        </View>
        <View style={styles.subjectTest}>
          <Text style={styles.roomText}>A606</Text>
        </View>
        <View style={styles.subjectTest}>
          <Text style={styles.testDescription}>Prova final</Text>
          <Text style={styles.grade}>6.00</Text>
          <Text style={styles.testDescription}>06/10</Text>
        </View>
        <View style={[styles.subjectTest, {marginRight: 0}]}>
          <Text style={styles.testDescription}>Média final</Text>
          <Text style={styles.grade}>6.00</Text>
        </View>
      </View>
    </View>
  );
}

export default Subject;
