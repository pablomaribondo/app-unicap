import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import { PURPLE, GREEN } from '../../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    heigth: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
  },
  box: {
    width: '85%',
    margin: 10,
    heigth: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 5,
    color: GREEN,
    fontColor: GREEN,
  },
  button: {
    alignItems: 'center',
    backgroundColor: PURPLE,
    padding: 10,
    width: '85%',
    borderRadius: 20,
    margin: 10,
  },
});

function LoginForm() {
  // Estados padrão de autenticação (Login e Senha)
  const [matricula, setMatricula] = useState('');
  const [pass, setPass] = useState('');
  const onClick = () => {
    // fazer login
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.box}>
        <Input
          id="login"
          placeholder="Matrícula"
          value={matricula}
          onChange={e => setMatricula(e.value)}
          multiline={false}
          type="text"
        />
      </View>
      <View style={styles.box}>
        <Input
          placeholder="Senha"
          id="pass"
          value={pass}
          onChange={e => setPass(e.value)}
          multiline={false}
          type="password"
        />
      </View>
      <TouchableHighlight style={styles.button} onClick={() => onClick}>
        <Text style={{ color: 'white', fontWeight: 'bolder' }}> ENTRAR </Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}

export default LoginForm;
