import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  INIT_SVG_UPLOAD,
  UPLOAD_SVG_SUCCESS,
  UPLOAD_SVG_ERROR,
} from './constants';
import { Service } from '../../service/service';
const service = new Service();
// Individual exports for testing
export function* uploadSaga() {
  const fetchWatcher = yield takeLatest(INIT_SVG_UPLOAD, upload);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* upload(action) {
  try {
    const formData = new FormData();

    for (let i = 0; i < action.files.length; i++) {
      formData.append('files', action.files[i]);
    }
    yield call(service.uploadSVG.bind(service),
      formData
    );
    yield put({
      type: UPLOAD_SVG_SUCCESS,
    });
  } catch (error) {
    yield put({ type: UPLOAD_SVG_ERROR, error: error.message });
  }
}
// All sagas to be loaded
export default [
  uploadSaga,
];
