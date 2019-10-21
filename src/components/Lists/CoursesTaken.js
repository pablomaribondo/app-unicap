import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { List, ListItem, Body, Right, Text, View } from 'native-base';

const list = [
  {
    name: 'Estrutura de Dados I',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Estrutura de Dados II',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Métodos Numéricos',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Top. Avançados em Eng. de Soft.',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Grafos',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Introdução a Programação I',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
  {
    name: 'Algebra Linear',
    subject: 'INF1216',
    period: '20191',
    average: '10.0',
    situation: 'AM',
  },
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
    heigth: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    width: '100%',
    margin: 10,
    heigth: '80vh',
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
    fontWeight: 'bolder',
  },
});

const CoursesTakens = () => {
  // Calendário de provas
  return (
    <ScrollView style={styles.container}>
      <List>
        {list.map(l => (
          <ListItem>
            <Body style={styles.first}>
              <Text style={(styles.title, { fontWeight: 'bolder' })}>{l.name}</Text>
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

export default CoursesTakens;
