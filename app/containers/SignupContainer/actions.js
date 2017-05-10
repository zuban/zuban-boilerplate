/*
 *
 * SignupContainer actions
 *
 */

import {
  SENT_SIGNUP_DATA,
} from './constants';

export const signUp = (email, password) => ({
  type: SENT_SIGNUP_DATA,
  email,
  password,
});
