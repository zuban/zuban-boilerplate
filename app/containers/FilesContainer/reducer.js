/*
 *
 * FilesContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT_DOCUMENTS,
  DOCUMENTS_LOADING_SUCCESS,
  DOCUMENTS_LOADING_FAIL,
} from './constants';

const initialState = fromJS({
  // for tags
  tagsFetching: true,
  tags: [],
  selectedTags: [],
  searchText: null,
  // for documents
  documentsFetching: true,
  documents: [],
});

function filesContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_DOCUMENTS:
      return state;
    case DOCUMENTS_LOADING_SUCCESS:
      return state
        .set('documentsFetching', false)
        .set('documents', action.documents);
    case DOCUMENTS_LOADING_FAIL:
      return state
        .set('documentsFetching', false)
        .set('documents', []);
    default:
      return state;
  }
}

export default filesContainerReducer;
