/*
 *
 * SignupContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SENT_SIGNUP_DATA,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './constants';

const initialState = fromJS({
  loading: false,
  signupErrorMessage: null,
});

function signupContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SENT_SIGNUP_DATA:
      return state
        .set('loading', false)
        .set('signupErrorMessage', null);
    case SIGNUP_SUCCESS:
      return state
        .set('loading', false)
        .set('signupErrorMessage', null);
    case SIGNUP_FAIL:
      return state
        .set('loading', false)
        .set('signupErrorMessage', action.error);
    default:
      return state;
  }
}

export default signupContainerReducer;
