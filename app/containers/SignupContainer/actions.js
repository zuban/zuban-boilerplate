/*
 *
 * SignupContainer actions
 *
 */

import {
  SENT_SIGNUP_DATA,
} from './constants';

export const signUp = (fields) => ({
  type: SENT_SIGNUP_DATA,
  fields,
})
