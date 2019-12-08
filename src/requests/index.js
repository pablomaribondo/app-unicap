/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from 'axios';

const BASE_URL = 'http://38e129d7.ngrok.io/api/v1/grad-student/';

export default async function authenticateUserRequest(payload) {
  try {
    const { matricula, pass } = payload;
    return await axios.post(`${BASE_URL}login`, {
      registration: matricula.slice(0, -1),
      digit: matricula.slice(-1),
      token: pass,
    });
  } catch (error) {
    console.error('Erro: ', error);
    return null;
  }
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
  try {
    const { registration, token, digit } = payload;
    return await axios.get(`${BASE_URL}subjects/coursing`, {
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
