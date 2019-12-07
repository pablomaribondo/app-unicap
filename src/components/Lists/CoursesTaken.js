/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { List, ListItem, Body, Right, Text, View } from 'native-base';
import { handleGetCovered } from '../../actions';
import { PRIMARY } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: PRIMARY,
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
    backgroundColor: PRIMARY,
  },
  button: {
    width: '100%',
    margin: 10,
  },
  title: {
    margin: 5,
    color: 'white',
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
  },
});

class Courses extends React.PureComponent {
  componentDidMount() {
    const { dispatch, REDUCER_USER } = this.props;
    const { user } = REDUCER_USER;
    dispatch(handleGetCovered(user));
  }

  render() {
    const { REDUCER_USER } = this.props;
    const { covered } = REDUCER_USER;
    return (
      <ScrollView style={styles.container}>
        <List>
          {covered.map(l => (
            <ListItem key={l.code} style={styles.container}>
              <Body style={styles.first}>
                <Text style={styles.title}>{l.name}</Text>
                <Text style={styles.title}>{l.code}</Text>
              </Body>
              <Body style={styles.body}>
                <View>
                  <Text style={styles.title}>Período</Text>
                  <Text style={styles.title}>{l.period}</Text>
                </View>
                <View>
                  <Text style={styles.title}>Média</Text>
                  <Text style={styles.title}>{l.averageGrade}</Text>
                </View>
              </Body>
              <Right>
                <Text style={styles.title}>Situação</Text>
                <Text style={styles.title}>{l.situation}</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ REDUCER_USER }) => ({
  REDUCER_USER,
});

Courses.propTypes = {
  REDUCER_USER: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Courses);
