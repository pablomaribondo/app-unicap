/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { handleGetCovered } from '../../actions';
import { PRIMARY } from '../../utils/colors';
import Subject from '../Subject/Subject';

const styles = StyleSheet.create({

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
      <View>
        <Text style={{height: 200}}>aaa</Text>

        <ScrollView>
        <Text style={{height: 200}}>aaa</Text>
        <View>
          {covered.map(l => (
            <Subject codigo={l.code} name={l.name} stringLocalHorarios="a" />
          ))}
        </View>
      </ScrollView>
      </View>
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
