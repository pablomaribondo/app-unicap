import React from 'react';
import { Container } from '@material-ui/core';
import LoginForm from '../components/Forms/Login';

const styles = () => ({
  container: {
    width: '100%',
    heigth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
});

function Login() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  return (
    <Container style={styles.container}>
      <LoginForm />
    </Container>
  );
}

export default Login;
