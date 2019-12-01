/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { PURPLE } from '../../../utils/colors';
import { handleAuthenticateUser } from '../../../actions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginVertical: 12,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 50,
    minWidth: '80%',
  },
  button: {
    backgroundColor: PURPLE,
    marginVertical: 12,
    padding: 18,
    borderRadius: 50,
  },
});

const LoginForm = () => {
  // Estados padrão de autenticação (Login e Senha)
  const dispatch = useDispatch();
  const [matricula, setMatricula] = useState(undefined);
  const [pass, setPass] = useState('');
  const { navigate } = useNavigation();

  const onClick = () => {
    dispatch(handleAuthenticateUser({ matricula, pass })).then(navigate('main'));
  };
  return (
    <View style={styles.container}>
      <TextInputMask
        placeholder="Matrícula"
        value={matricula}
        type="custom"
        options={{
          mask: '9999999999',
        }}
        keyboardType="numeric"
        onChangeText={e => setMatricula(e)}
        style={styles.field}
      />
      <TextInput
        placeholder="Senha"
        value={pass}
        onChangeText={e => setPass(e)}
        multiline={false}
        style={styles.field}
        keyboardType="numeric"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={{ color: 'white' }}> ENTRAR </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
