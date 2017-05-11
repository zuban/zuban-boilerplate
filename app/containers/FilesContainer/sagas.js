import { take, call, cancel, select, put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  INIT_DOCUMENTS,
  DOCUMENTS_LOADING_SUCCESS,
  DOCUMENTS_LOADING_FAIL,

  TAGS_LOADING_SUCCESS,

  CHANGE_TAGS,
  ADD_TAG,
} from './constants';
import makeSelectFilesContainer from './selectors';
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
    const tags = yield call(service.getTags.bind(service), '');
    yield put({
      type: TAGS_LOADING_SUCCESS,
      tags,
    });
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

export function* updateOnChangeTagsSaga() {
  const fetchWatcher = yield takeLatest(CHANGE_TAGS, updateOnChange);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* updateOnAddTagsSaga() {
  const fetchWatcher = yield takeLatest(ADD_TAG, updateOnChange);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* updateOnChange(action) {
  try {
    const state = yield select(makeSelectFilesContainer());
    const tags = yield call(service.getTags.bind(service), '');
    yield put({
      type: TAGS_LOADING_SUCCESS,
      tags,
    });
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
  updateOnChangeTagsSaga,
  updateOnAddTagsSaga,
];
