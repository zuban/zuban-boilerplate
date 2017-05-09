/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SENT_LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

const initialState = fromJS({
  loading: false,
  loginErrorMessage: null,
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SENT_LOGIN_DATA:
      return state
        .set('loading', true)
        .set('loginErrorMessage', null)
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('loginErrorMessage', null)
    case LOGIN_FAIL:
      return state
        .set('loading', false)
        .set('loginErrorMessage', action.error)
    default:
      return state;
  }
}

export default loginContainerReducer;
