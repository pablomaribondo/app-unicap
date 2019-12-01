import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';
import { WHITE, PRIMARY, PRIMARY_DARK } from '../../utils/colors';
import { elevationShadowStyle } from '../../utils/shadows';

const styles = StyleSheet.create({
  tabsWrapper: {
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',
    color: WHITE,
    fontSize: 22,
    fontFamily: 'varela-round',
  },
  headerContentWrapper: {
    paddingBottom: 18,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: PRIMARY,
    ...elevationShadowStyle(30),
  },
  tab: {
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  activeTab: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: WHITE,
  },
  tabText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: PRIMARY_DARK,
    fontFamily: 'varela-round',
  },
  activeTabText: {
    color: WHITE,
  },
});

export default function HomeHeader() {
  const user = useSelector(state => state.REDUCER_USER.user);
  let registration = '';
  let name = '';
  let digit = '';
  if (typeof user !== 'undefined') {
    ({ registration, digit, name } = user);
  }
  return (
    <View style={styles.header}>
      <View style={styles.headerContentWrapper}>
        <Text style={[styles.text]}>{name}</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>
          {registration}-{digit}
        </Text>
      </View>
      <ScrollView horizontal style={styles.tabsWrapper}>
        <View style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Período atual</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Disciplinas</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Meus dados</Text>
        </View>
      </ScrollView>
    </View>
  );
}
