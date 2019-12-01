/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Body, Right, Text, View } from 'native-base';
import { handleGetCovered } from '../../actions';

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

const Courses = () => {
  // Calendário de provas
  const user = useSelector(state => state.REDUCER_USER.user);
  const covered = useSelector(state => state.REDUCER_USER.covered);
  const dispatch = useDispatch();
  dispatch(handleGetCovered(user));
  return (
    <ScrollView style={styles.container}>
      <List>
        {covered.map(l => (
          <ListItem>
            <Body style={styles.first}>
              <Text style={styles.title}>{l.name}</Text>
              <Text note style={styles.title}>
                {l.code}
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
                  {l.averageGrade}
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

export default Courses;
