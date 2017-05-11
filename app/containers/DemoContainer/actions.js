/*
 *
 * LoginContainer actions
 *
 */

import {
  SENT_LOGIN_DATA,
} from './constants';

export const login = (username, password) => ({
  type: SENT_LOGIN_DATA,
  username,
  password,
});
