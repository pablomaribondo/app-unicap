/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Text, View } from 'native-base';
import { handleGetCoursing } from '../../actions';
import { PRIMARY } from '../../utils/colors';
import Subject from '../Subject/Subject';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    height: 20,
  },
  text: {
    fontSize: 14,
    height: 14,
  },
});

class Courses extends React.Component {
  componentDidMount() {
    const { dispatch, REDUCER_USER } = this.props;
    const { user } = REDUCER_USER;
    dispatch(handleGetCoursing(user));
  }

  render() {
    const { REDUCER_USER } = this.props;
    const { coursing } = REDUCER_USER;
    return (
      <ScrollView style={{ height: 200 , backgroundColor: 'yellow', padding: 20}}>
        {coursing.map(eachSubject => {
          return (
            <Subject
              codigo={eachSubject.code}
              name={eachSubject.name}
              stringLocalHorarios="teste"
            />
          );
        })}
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
