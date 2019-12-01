import authenticateUserRequest, {
  getScheduleRequest,
  getPendingRequest,
  getGradesRequest,
  getCoveredRequest,
  getCoursingRequest,
  getGradRequest,
} from '../requests';

// import authenticateUserRequest from '../../utils/requests';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const GET_GRAD = 'GET_GRAD';
export const GET_COURSING_SUBJECTS = 'GET_COURSING_SUBJECTS';
export const GET_COVERED_SUBJECTS = 'GET_COVERED_SUBJECTS';
export const GET_GRADES_SUBJECTS = 'GET_GRADES_SUBJECTS';
export const GET_PENDING_SUBJECTS = 'GET_PENDING_SUBJECTS';
export const GET_SCHEDULE_SUBJECTS = 'GET_SCHEDULE_SUBJECTS';

function getSchedule(payload) {
  return {
    type: GET_SCHEDULE_SUBJECTS,
    payload,
  };
}

export function handleGetSchedule(payload) {
  return dispatch => getScheduleRequest(payload).then(data => dispatch(getSchedule(data)));
}

function getPending(payload) {
  return {
    type: GET_PENDING_SUBJECTS,
    payload,
  };
}

export function handleGetPending(payload) {
  return dispatch => getPendingRequest(payload).then(data => dispatch(getPending(data)));
}

function getGrades(payload) {
  return {
    type: GET_GRADES_SUBJECTS,
    payload,
  };
}

export function handleGetGrades(payload) {
  return dispatch => getGradesRequest(payload).then(data => dispatch(getGrades(data)));
}

function getCovered(payload) {
  return {
    type: GET_COVERED_SUBJECTS,
    payload,
  };
}

export function handleGetCovered(payload) {
  return dispatch =>
    getCoveredRequest(payload).then(data => {
      dispatch(getCovered(data));
      return data;
    });
}

function getCoursing(payload) {
  return {
    type: GET_COURSING_SUBJECTS,
    payload,
  };
}

export function handleGetCoursing(payload) {
  return dispatch => getCoursingRequest(payload).then(data => dispatch(getCoursing(data)));
}

function getGrade(payload) {
  return {
    type: GET_GRAD,
    payload,
  };
}

export function handleGetGrad(payload) {
  return dispatch => getGradRequest(payload).then(data => dispatch(getGrade(data)));
}

function authenticateUser(payload) {
  return {
    type: AUTHENTICATE_USER,
    payload,
  };
}

export function handleAuthenticateUser(payload) {
  return dispatch =>
    authenticateUserRequest(payload).then(data => dispatch(authenticateUser(data)));
}
