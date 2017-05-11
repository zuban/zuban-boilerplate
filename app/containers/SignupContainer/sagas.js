import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SENT_SIGNUP_DATA,
  SIGNUP_FAIL,
} from './constants';

import {
  LOGIN_SUCCESS,
} from '../LoginContainer/constants';

import {
  SET_AUTHENTICATED,
} from '../App/constants';

import { Service } from '../../service/service';
const service = new Service();

// Individual exports for testing
export function* signUpSaga() {
  const fetchWatcher = yield takeLatest(SENT_SIGNUP_DATA, signUpUser);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* signUpUser(action) {
  try {
    yield call(service.singup.bind(service), {
      email: action.email,
      username: action.username,
      password: action.password,
    }
    );
    yield call(service.login.bind(service),
      action.email,
      action.password
    );
    yield put({ type: LOGIN_SUCCESS });
    yield put({
      type: SET_AUTHENTICATED,
      username: action.email,
    });
    browserHistory.push('/home');
  } catch (error) {
    yield put({ type: SIGNUP_FAIL, error: error.message });
  }
}

// All sagas to be loaded
export default [
  signUpSaga,
];
