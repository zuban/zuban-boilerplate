import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SENT_LOGIN_DATA,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

import {
  SET_AUTHENTICATED,
  UPDATE_USER,
} from '../App/constants';

import { Service } from '../../service/service';
const service = new Service();
// Individual exports for testing
export function* loginSaga() {
  const fetchWatcher = yield takeLatest(SENT_LOGIN_DATA, loginUser);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* loginUser(action) {
  try {
    const auth = yield call(service.login.bind(service),
      action.username,
      action.password
    );
    yield put({
      type: LOGIN_SUCCESS,
    });
    yield put({
      type: SET_AUTHENTICATED,
      username: action.username,
    });
    service.setUserId(auth.id);
    yield put({
      type: UPDATE_USER,
      userId: auth.id,
    });
    browserHistory.push('/home');
  } catch (error) {
    yield put({ type: LOGIN_FAIL, error: error.message });
  }
}

// All sagas to be loaded
export default [
  loginSaga,
];
