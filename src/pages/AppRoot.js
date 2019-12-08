import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { SECONDARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: SECONDARY,
    height: '100%',
  },
});

const AppRoot = () => {
  const name = useNavigationParam('name');
  const registartion = useNavigationParam('registration');
  const pass = useNavigationParam('pass');
  return (
    <View style={styles.rootContainer}>
      <HomeHeader name={name} registration={registartion} />
    </View>
  );
};

export default AppRoot;
