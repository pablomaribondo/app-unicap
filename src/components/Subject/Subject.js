import { View, React, StyleSheet } from 'react-native';
import Text from 'react-native-web/dist/exports/Text';
import { PRIMARY } from '../../utils/colors';

const styles = StyleSheet.create({
  subject: {
    backgroundColor: PRIMARY,
    height: 200
  },
  text: {
    height: 14,
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
