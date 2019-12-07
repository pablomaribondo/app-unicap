/* eslint-disable no-console */
/* eslint-disable no-undef */
const BASE_URL = 'http://0.0.0.0:3000/api/v1/grad-student/';

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
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}`, hdrs)
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

export function getGradRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}`, hdrs)
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

export function getCoursingRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}subjects/coursing`, hdrs)
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

export function getCoveredRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}subjects/covered`, hdrs)
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

export function getGradesRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}subjects/grades`, hdrs)
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

export function getPendingRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}subjects/pending`, hdrs)
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

export function getScheduleRequest(payload) {
  const { registration, token, digit } = payload;
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      registration,
      digit,
      token,
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}subjects/schedule`, hdrs)
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
