import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { loadAsync } from 'expo-font';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SECONDARY } from './src/utils/colors';
import LoginForm from './src/components/Forms/Login';
import AppRoot from './src/pages/AppRoot';
import { useNavigation } from 'react-navigation-hooks';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: SECONDARY,
    justifyContent: 'center',
  },
});

const Login = () => {
  const { useEffect, useState } = React;
  const [fontLoaded, setFontLoaded] = useState(false);
  const { navigate } = useNavigation();

  const loadFont = async () => {
    await loadAsync({
      'varela-round': require('./assets/VarelaRound-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  const proceedToApp = userDetails => {
    navigate('AppRoot', userDetails);
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <View style={styles.root}>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <LoginForm onLoginSuccess={proceedToApp} />
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
    AppRoot: {
      screen: AppRoot,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(AppNavigator);
