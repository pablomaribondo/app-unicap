/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { PRIMARY, PRIMARY_DARK, SECONDARY_DARKER } from '../../utils/colors';
import formatDate from '../../utils/formatDate';

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
  if (subject) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{subject.code}</Text>
        <Text style={[styles.text, { fontSize: 22 }]}>{subject.name}</Text>
        <View style={styles.subjectLocation}>
          <View style={styles.room}>
            <Text style={styles.roomText}>{subject.room}</Text>
          </View>
          <Text style={[styles.text]}>{subject.schedule}</Text>
        </View>
        <View style={styles.subjectTests}>
          <View style={styles.subjectTest}>
            <Text style={styles.testDescription}>1º GQ</Text>
            <Text style={styles.grade}>{subject.grades.firstGrade}</Text>
            <Text style={styles.testDescription}>
              {formatDate(
                subject.examSchedule.firstGrade.firstExame,
                subject.examSchedule.firstGrade.secondExame
              )}
            </Text>
          </View>
          <View style={styles.subjectTest}>
            <Text style={styles.testDescription}>2º GQ</Text>
            <Text style={styles.grade}>{subject.grades.secondGrade}</Text>
            <Text style={styles.testDescription}>
              {formatDate(
                subject.examSchedule.secondGrade.firstExame,
                subject.examSchedule.secondGrade.secondExame
              )}
            </Text>
          </View>
          <View style={styles.subjectTest}>
            <Text style={styles.testDescription}>Prova final</Text>
            <Text style={styles.grade}>{subject.grades.finalGrade}</Text>
            <Text style={styles.testDescription}>
              {formatDate(subject.examSchedule.finalGrade)}
            </Text>
          </View>
          <View style={[styles.subjectTest, { marginRight: 0 }]}>
            <Text style={styles.testDescription}>Média final</Text>
            <Text style={styles.grade}>6.00</Text>
          </View>
        </View>
      </View>
    );
  }
  return <></>;
}

export default Subject;
