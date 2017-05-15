import { take, call, cancel, select, put, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  INIT_DOCUMENTS,
  DOCUMENTS_LOADING_SUCCESS,
  DOCUMENTS_LOADING_FAIL,

  TAGS_LOADING_SUCCESS,
  TAGS_LOADING_FAIL,

  CHANGE_TAGS,
  ADD_TAG,
  CHANGE_TEXT,
  GET_DOCUMENT,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_ERROR,
  SAVE_DOCUMENT,
  SAVE_DOCUMENT_SUCCESS,
  SAVE_DOCUMENT_ERROR,
} from './constants';
import { makeSelectFilesContainer } from './selectors';
import { Service } from '../../service/service';
const service = new Service();


// Individual exports for testing
export function* initDocumentsSaga() {
  const fetchWatcher = yield takeLatest(INIT_DOCUMENTS, getDocumentsAndTags);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* updateOnChangeTagsSaga() {
  const fetchWatcher = yield takeLatest(CHANGE_TAGS, getDocumentsAndTags);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* updateOnAddTagsSaga() {
  const fetchWatcher = yield takeLatest(ADD_TAG, getDocumentsAndTags);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* updateChangeTextSaga() {
  const fetchWatcher = yield takeLatest(CHANGE_TEXT, getDocumentsAndTags);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* saveDocumentSaga() {
  const fetchWatcher = yield takeLatest(SAVE_DOCUMENT, saveDocument);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

export function* getDocumentSaga() {
  const fetchWatcher = yield takeLatest(GET_DOCUMENT, getDocument);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchWatcher);
}

function* getDocumentsAndTags(action) {
  const state = yield select(makeSelectFilesContainer());
  const { selectedTags, searchText } = state;
  try {
    const tags = yield call(service.getTags.bind(service), selectedTags.map((item) => item.id));
    yield put({
      type: TAGS_LOADING_SUCCESS,
      tags,
    });
  } catch (error) {
    yield put({
      type: TAGS_LOADING_FAIL,
      error: error.message });
  }
  try {
    const documents = yield call(service.getDocuments.bind(service), selectedTags.map((item) => item.value), searchText);
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

function* saveDocument(action) {
  const state = yield select(makeSelectFilesContainer());

  const editorState = action.state;
  const {
    modalFileName,
    modalHashTags,
    modalId,
    modalOriginalContent,
    modalOwner,
  } = state;
  try {
    yield call(service.saveDocumentById.bind(service), modalId, {
      fileName: modalFileName,
      hashTags: modalHashTags,
      id: modalId,
      originalContent: modalOriginalContent,
      owner: modalOwner,
      recognizedContent: editorState,
    });
    yield put({
      type: SAVE_DOCUMENT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SAVE_DOCUMENT_ERROR,
      error: error.message });
  }
}

function* getDocument(action) {
  try {
    const document = yield call(service.getDocumentById.bind(service), action.id);
    yield put({
      type: GET_DOCUMENT_SUCCESS,
      document,
    });
  } catch (error) {
    yield put({
      type: GET_DOCUMENT_ERROR,
      error: error.message });
  }
}

// All sagas to be loaded
export default [
  initDocumentsSaga,
  updateOnChangeTagsSaga,
  updateOnAddTagsSaga,
  updateChangeTextSaga,
  getDocumentSaga,
  saveDocumentSaga,
];
