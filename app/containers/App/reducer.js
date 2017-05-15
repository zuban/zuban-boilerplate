/*
 *
 * FilesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { Service } from 'service/service';
import {
  SET_AUTHENTICATED,
  SET_LOGOUT,
  UPDATE_USER,
} from './constants';


const service = new Service();

const initialState = fromJS({
  loading: false,
  userName: service.getCurrentUser(),
  userId: service.getCurrentUserId(),
  isAuthenticated: service.checkToken(),
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return state
        .set('isAuthenticated', true)
        .set('userName', action.username);
    case SET_LOGOUT:
      return state
        .set('isAuthenticated', false)
        .set('userName', null);
    case UPDATE_USER:
      return state
        .set('userId', action.userId);
    default:
      return state;
  }
}

export default globalReducer;
