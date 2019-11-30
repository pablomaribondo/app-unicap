/* eslint-disable no-console */
/* eslint-disable no-undef */
const BASE_URL = 'http://localhost:3000/api/v1/';

export default function authenticateUserRequest(payload) {
  const { matricula, pass } = payload;
  const registration = matricula.slice(0, -1);
  const digit = matricula.slice(-1);
  const token = pass;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration: '201713009',
      digit: '2',
      token: '795130',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}grad-student/`, hdrs)
      .then(res => console.log(res) || res.json())
      .catch(() => []),
  ])
    .then(([data]) => {
      return { data, registration, digit, token };
    })
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getGradRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getCoursingRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/coursing`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getCoveredRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/covered`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getGradesRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/grades`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getPendingRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/pending`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getScheduleRequest({ login, senha }) {
  const body = {
    login,
    senha,
  };
  const hdrs = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}api/v1/grad-student/schedule`, hdrs)
      .then(res => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch(err => {
      console.error('Erro: ', err);
      return null;
    });
}
