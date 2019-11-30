import {
  AUTHENTICATE_USER,
  GET_COURSING_SUBJECTS,
  GET_COVERED_SUBJECTS,
  GET_GRAD,
  GET_PENDING_SUBJECTS,
  GET_GRADES_SUBJECTS,
  GET_SCHEDULE_SUBJECTS,
} from '../../actions';

/* eslint-disable one-var */

function userData(
  state = {
    user: {},
    covered: [],
    coursing: [],
    grad: [],
    grades: [],
    pending: [],
    schedule: [],
  },
  action
) {
  let registration, digit, token, data;
  let name, course;
  switch (action.type) {
    case AUTHENTICATE_USER:
      ({ registration, digit, token, data } = action.payload);
      ({ name, course } = data.values.userInfo);
      return {
        ...state,
        user: {
          registration,
          digit,
          token,
          name,
          course,
        },
      };
    case GET_COURSING_SUBJECTS:
      return {
        ...state,
        coursing: action.payload,
      };
    case GET_COVERED_SUBJECTS:
      return {
        ...state,
        covered: action.payload,
      };
    case GET_GRAD:
      return {
        ...state,
        grad: action.payload,
      };
    case GET_PENDING_SUBJECTS:
      return {
        ...state,
        pending: action.payload,
      };
    case GET_GRADES_SUBJECTS:
      return {
        ...state,
        grades: action.payload,
      };
    case GET_SCHEDULE_SUBJECTS:
      return {
        ...state,
        schedule: action.payload,
      };
    default:
      return state;
  }
}

export default userData;
