export const GET_USER_DATA = 'GET_USER_DATA';

function getUserData(payload) {
  return {
    type: GET_USER_DATA,
    payload,
  };
}

export function _handleGetUserData(payload) {
  return dispatch => {
    dispatch(getUserData(payload));
  };
}

/**
 * If you're making a async request:
 * export function _handleGetUserData (payload) {
 *    return requestUserData(payload)
 *          .then(( data ) => {
 *               dispatch(getUserData(data))
 *           })
 * }
 *
 *
 */
