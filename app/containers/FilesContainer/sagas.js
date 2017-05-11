import { take, call, cancel, put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  INIT_DOCUMENTS,
  DOCUMENTS_LOADING_SUCCESS,
  DOCUMENTS_LOADING_FAIL,
} from './constants';

import { Service } from '../../service/service';
const service = new Service();
// Individual exports for testing
export function* initDocumentsSaga() {
  const fetchWatcher = yield takeLatest(INIT_DOCUMENTS, initDocuments);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* initDocuments(action) {
  try {
    const documents = yield call(service.getDocuments.bind(service), '');
    yield put({
      type: DOCUMENTS_LOADING_SUCCESS,
      documents,
    });
  } catch (error) {
    yield put({
      type: DOCUMENTS_LOADING_FAIL,
      error: error.message });
  }
}

// All sagas to be loaded
export default [
  initDocumentsSaga,
];
