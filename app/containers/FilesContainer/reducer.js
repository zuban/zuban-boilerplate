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

  TAGS_LOADING_SUCCESS,
  TAGS_LOADING_FAIL,

  CHANGE_TAGS,
  ADD_TAG,
  CHANGE_TEXT,
  TOGGLE_MODAL,
} from './constants';

const initialState = fromJS({
  // for tags
  tagsFetching: true,
  tags: [],
  selectedTags: [],
  searchText: '',
  // for documents
  documentsFetching: true,
  documents: [],

  isModalOpen: false,
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
    case TAGS_LOADING_SUCCESS:
      return state
        .set('tagsFetching', false)
        .set('tags', action.tags);
    case TAGS_LOADING_FAIL:
      return state
        .set('tagsFetching', false)
        .set('tags', []);
    case TOGGLE_MODAL:
      return state
        .set('isModalOpen', !state.get('isModalOpen'));
    case CHANGE_TAGS:
      return state
        .set('selectedTags', action.tags)
        .set('tagsFetching', true)
        .set('documentsFetching', true);
    case CHANGE_TEXT:
      return state
        .set('searchText', action.text)
        .set('tagsFetching', true)
        .set('documentsFetching', true);
    case ADD_TAG: {
      const selectedTags = state.get('selectedTags');
      return state
        .set('selectedTags', [...selectedTags, action.tag])
        .set('tagsFetching', true)
        .set('documentsFetching', true);
    }
    default:
      return state;
  }
}

export default filesContainerReducer;
