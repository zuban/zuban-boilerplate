/*
 *
 * SignupContainer actions
 *
 */

import {
  SENT_SIGNUP_DATA,
} from './constants';

export const signUp = (email, username, password) => ({
  type: SENT_SIGNUP_DATA,
  email,
  username,
  password,
});
