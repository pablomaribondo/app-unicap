/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { ACTION } from '../../../utils/colors';
import { authenticateUserRequest } from '../../../Requests';
import { elevationShadowStyle } from '../../../utils/shadows';

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
    ...elevationShadowStyle(20),
  },
  button: {
    backgroundColor: ACTION,
    marginVertical: 12,
    padding: 18,
    borderRadius: 50,
    ...elevationShadowStyle(20),
  },
});

function LoginForm({ onLoginSuccess }) {
  const [matricula, setMatricula] = useState('');
  const [pass, setPass] = useState('');
  const onClick = () => {
    authenticateUserRequest({ matricula, pass })
      .then(response => {
        onLoginSuccess({ ...response.data.values.userInfo, pass });
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.values);
        } else if (error.response && error.response.status !== 400) {
          alert(
            'Tivemos um problema interno ao tentar efetuar seu login, tente novamente mais tarde!'
          );
        } else if (!error.response) {
          alert('Cheque sua conexāo com a internet e tente novamente!');
        }
      });
  };
  return (
    <View style={styles.container}>
      <TextInputMask
        placeholder="Matrícula"
        value={matricula}
        type="custom"
        options={{
          mask: '999999999-9',
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
}

export default LoginForm;
