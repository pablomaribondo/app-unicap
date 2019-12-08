import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
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

// eslint-disable-next-line react/prop-types
export default function HomeHeader({ name, registration, onTabChange, selectedTab }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContentWrapper}>
        <Text style={[styles.text, { textTransform: 'capitalize', marginTop: 12 }]}>{name}</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>{registration}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsWrapper}>
        <TouchableOpacity
          onPress={() => onTabChange('current-period')}
          style={[styles.tab, selectedTab === 'current-period' ? styles.activeTab : undefined]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'current-period' ? styles.activeTabText : undefined,
            ]}
          >
            Período atual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabChange('subjects-took')}
          style={[styles.tab, selectedTab === 'subjects-took' ? styles.activeTab : undefined]}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'subjects-took' ? styles.activeTabText : undefined,
            ]}
          >
            Cursadas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'subjects-to-take' ? styles.activeTab : undefined]}
          onPress={() => onTabChange('subjects-to-take')}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'subjects-to-take' ? styles.activeTabText : undefined,
            ]}
          >
            Faltando
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTabChange('profile')}
          style={[styles.tab, selectedTab === 'profile' ? styles.activeTab : undefined]}
        >
          <Text
            style={[styles.tabText, selectedTab === 'profile' ? styles.activeTabText : undefined]}
          >
            Meus dados
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
