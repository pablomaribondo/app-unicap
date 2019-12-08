/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from 'axios';

const BASE_URL = 'http://ee3f5348.ngrok.io/api/v1/grad-student/';

export async function authenticateUserRequest(payload) {
  const { matricula, pass } = payload;
  return axios.post(`${BASE_URL}login`, {
    registration: matricula.slice(0, -2),
    digit: matricula.slice(-1),
    token: pass,
  });
}

export async function getGradRequest(payload) {
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}`, {
      headers: {
        registration,
        digit,
        token,
      },
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
}

export async function getCoursingRequest(payload) {
  const { registration, pass } = payload;
  return axios.get(`${BASE_URL}subjects/coursing`, {
    headers: {
      registration: registration.slice(0, -2),
      digit: registration.slice(-1),
      token: pass,
    },
  });
}

export async function getCoveredRequest(payload) {
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}subjects/covered`, {
      headers: {
        registration,
        digit,
        token,
      },
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
}

export async function getGradesRequest(payload) {
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}subjects/grades`, {
      headers: {
        registration,
        digit,
        token,
      },
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
}

export async function getPendingRequest(payload) {
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}subjects/pending`, {
      headers: {
        registration,
        digit,
        token,
      },
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
}

export async function getScheduleRequest(payload) {
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}subjects/schedule`, {
      headers: {
        registration,
        digit,
        token,
      },
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
}
