import React, { useState } from 'react';
import { View, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    heigth: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    width: '100%',
    margin: 10,
    heigth: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    width: '100%',
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
      <Button style={styles.button} title="Entrar" color="black" onClick={() => onClick} loading />
    </KeyboardAvoidingView>
  );
}

export default LoginForm;
