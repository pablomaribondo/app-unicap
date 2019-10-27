import React from 'react';
import { createAppContainer } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { WHITE, PURPLE, GREEN, CAFE, RED } from '../utils/colors';

const Tabs = createBottomTabNavigator(
  {
    periodoAtual: {
      screen: () => <View style={{ width: '100%', height: '100%', backgroundColor: PURPLE }} />,
      navigationOptions: {
        tabBarLabel: 'PERÍODO ATUAL',
        tabBarIcon: () => <Ionicons name="ios-bookmarks" size={30} color={WHITE} />,
      },
    },
    disciplinas: {
      screen: () => <View style={{ width: '100%', height: '100%', backgroundColor: CAFE }} />,
      navigationOptions: {
        tabBarLabel: 'DISCIPLINAS',
        tabBarIcon: () => <Ionicons name="ios-bookmarks" size={30} color={WHITE} />,
      },
    },
    meuPerfil: {
      screen: () => <View style={{ width: '100%', height: '100%', backgroundColor: RED }} />,
      navigationOptions: {
        tabBarLabel: 'MEU PERFIL',
        tabBarIcon: () => <Ionicons name="ios-contact" size={30} color={WHITE} />,
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? WHITE : GREEN,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? GREEN : WHITE,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export const AppTabs = createAppContainer(Tabs);
