import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PRIMARY_COLOR, GREEN } from './src/utils/colors';
import TopStatusBar from './src/components/StatusBar';
import HomeHeader from './src/components/HomeHeader';
import { AppTabs } from './src/navigation';
import reducer from './src/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default function() {
  return (
    <Provider store={createStore(reducer)}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TopStatusBar backgroundColor={GREEN} barStyle="light-content" />
        <HomeHeader />
        <AppTabs />
      </KeyboardAvoidingView>
    </Provider>
  );
}
