import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { PRIMARY } from '../../utils/colors';

const styles = StyleSheet.create({
  subject: {
    backgroundColor: PRIMARY,
  },
  text: {
    fontSize: 14,
  },
});

// eslint-disable-next-line react/prop-types
export default function({ codigo, nome, stringLocalHorarios, notas, isCoursing }) {
  return (
    <View style={styles.subject}>
      <Text style={styles.text}>{codigo}</Text>
      <Text style={styles.text}> {nome} </Text>
      <Text style={styles.text}> {stringLocalHorarios} </Text>
    </View>
  );
}
