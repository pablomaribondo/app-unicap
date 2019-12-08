/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { PURPLE } from '../../../utils/colors';

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

function LoginForm() {
  // Estados padrão de autenticação (Login e Senha)
  const [matricula, setMatricula] = useState(undefined);
  const [pass, setPass] = useState('');
  const onClick = () => {
    alert('Entrar');
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
        onChange={e => setPass(e.value)}
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
