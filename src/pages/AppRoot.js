import React, { useState } from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { SECONDARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';
import Subject from "../components/Subject";
import CurrentSubjects from "./CurrentSubjects";

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: SECONDARY,
    height: '100%',
  },
});

const AppRoot = () => {
  const [selectedTab, setSelectedTab] = useState('current-period');

  const name = useNavigationParam('name');
  const registartion = useNavigationParam('registration');
  const pass = useNavigationParam('pass');

  return (
    <View style={styles.rootContainer}>
      <HomeHeader
        name={name}
        registration={registartion}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <ScrollView style={{flex: 1}}>
        <CurrentSubjects registration={registartion} pass={pass} />
      </ScrollView>
    </View>
  );
};

export default AppRoot;
