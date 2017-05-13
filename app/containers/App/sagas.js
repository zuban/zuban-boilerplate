/**
 * Created by sergeyzubov on 13/05/2017.
 */
import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
// import {
//   SENT_LOGIN_DATA,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
// } from './constants';

import {
  SET_AUTHENTICATED,
  UPDATE_USER,
} from './constants';

import { Service } from '../../service/service';
const service = new Service();

// Individual exports for testing
export function* loadUserDetailsSaga() {
  const fetchWatcher = yield takeLatest(SET_AUTHENTICATED, loadUserDetails);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* loadUserDetails(action) {
  try {
    const user = yield call(service.getUser.bind(service)
    );
    service.setUserId(user.id);
    yield put({
      type: UPDATE_USER,
      userId: user.id,
    });
  } catch (error) {
    // yield put({ type: LOGIN_FAIL, error: error.message });
  }
}

export default loadUserDetailsSaga;
