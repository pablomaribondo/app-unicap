/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List, ListItem, Body, Right, Text, View } from 'native-base';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const list = [
  {
    name: 'Como Aturar Bolsominion I',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    width: '100%',
    margin: 10,
    height: '80%',
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
  title: {
    margin: 5,
  },
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  first: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '40%',
    fontWeight: 'bold',
  },
});

const CoursesTakens = props => {
  // Calendário de provas
  const { userData } = props;
  const { covered } = userData;
  return (
    <ScrollView style={styles.container}>
      <List>
        {covered.map(l => (
          <ListItem>
            <Body style={styles.first}>
              <Text style={styles.title}>{l.name}</Text>
              <Text note style={styles.title}>
                {l.subject}
              </Text>
            </Body>
            <Body style={styles.body}>
              <View>
                <Text style={styles.title}>Período</Text>
                <Text note style={styles.title}>
                  {l.period}
                </Text>
              </View>
              <View>
                <Text style={styles.title}>Média</Text>
                <Text note style={styles.title}>
                  {l.average}
                </Text>
              </View>
            </Body>
            <Right>
              <Text style={styles.title}>Situação</Text>
              <Text note style={styles.title}>
                {l.situation}
              </Text>
            </Right>
          </ListItem>
        ))}
      </List>
    </ScrollView>
  );
};

CoursesTakens.propTypes = {
  userData: PropTypes.object,
};

CoursesTakens.defaultProps = {
  userData: { covered: [] },
};

export default CoursesTakens;
