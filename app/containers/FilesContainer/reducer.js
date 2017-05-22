/*
 *
 * FilesContainer reducer
 *
 */

import { fromJS, Map } from 'immutable';
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
  GET_DOCUMENT,
  GET_DOCUMENT_SUCCESS,
  // todo impelement error handling
  UPDATE_EDITOR_STATE,
  UPDATE_MODAL_TAGS,
  SAVE_DOCUMENT_SUCCESS,
  // todo impelement error handling
  DELETE_DOCUMENT_SUCCESS,
  // todo impelement error handling


  TOGGLE_TAG_MODAL,
  OPEN_TAG_MODAL,
  GET_TAG_MODAL_DATA_SUCCESS,
  GET_TAG_MODAL_DATA_ERROR,
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

  // for modal
  isModalOpen: false,
  modalFetching: true,

  modalFileName: null,
  modalHashTags: [],
  modalId: null,
  modalOriginalContent: null,
  modalOwner: null,
  modalRecognizedContent: null,
  modalEditorState: null,

  // for tag modal
  isTagModalOpen: false,
  tagModalFetching: true,
  tagModalTag: null,
  tagModalDocuments: [],
  initialTagObject: null,
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
    case TOGGLE_TAG_MODAL:
      return state
        .set('isTagModalOpen', !state.get('isTagModalOpen'));
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
    case GET_DOCUMENT:
      return state
        .set('isModalOpen', true)
        .set('modalFetching', true);
    case GET_DOCUMENT_SUCCESS:
      return state
        .set('modalFetching', false)
        .set('modalFileName', action.document.fileName)
        .set('modalHashTags', action.document.hashTags)
        .set('modalId', action.document.id)
        .set('modalOriginalContent', action.document.originalContent)
        .set('modalOwner', action.document.owner)
        .set('modalRecognizedContent', action.document.recognizedContent)
        .set('modalEditorState', action.document.recognizedContent);
    case UPDATE_EDITOR_STATE:
      return state
        .set('modalEditorState', action.state);
    case SAVE_DOCUMENT_SUCCESS:
      return state
        .set('isModalOpen', false)
        .set('modalFetching', true)
        .set('modalFileName', null)
        .set('modalHashTags', null)
        .set('modalId', null)
        .set('modalOriginalContent', null)
        .set('modalOwner', null)
        .set('modalRecognizedContent', null)
        .set('modalEditorState', null);
    case DELETE_DOCUMENT_SUCCESS:
      return state
        .set('isModalOpen', false)
        .set('modalFetching', true)
        .set('modalFileName', null)
        .set('modalHashTags', null)
        .set('modalId', null)
        .set('modalOriginalContent', null)
        .set('modalOwner', null)
        .set('modalRecognizedContent', null)
        .set('modalEditorState', null);
    case UPDATE_MODAL_TAGS: {
      const filteredProps = action.tags.map((item) => {
        if (item.className) {
          return {
            value: item.id,
          };
        } else {
          return item;
        }
      });
      return state
        .set('modalHashTags', filteredProps);
    }
    case ADD_TAG: {
      const selectedTags = state.get('selectedTags');
      return state
        .set('selectedTags', [...selectedTags, action.tag])
        .set('tagsFetching', true)
        .set('documentsFetching', true);
    }
    case GET_TAG_MODAL_DATA_SUCCESS: {
      // const selectedTags = state.get('selectedTags');

      let { tag, documents } = action;
      const initialTagObject = Object.assign({}, tag);

      tag.modalSelectedFiles = documents.reduce((sum, item) => {
        if (tag.fileIds.includes(item.id)) {
          return [...sum, {
            value: item.id,
            label: item.fileName,
          }];
        } else {
          return sum;
        }
      }, []);

      documents = documents.map((item) => ({
        value: item.id,
        label: item.fileName,
      }));

      tag.users = tag.users.map((item) => ({
        value: item.id,
        label: item.email,
        meta: item,
      }))

      tag.fileIds = tag.fileIds.map((item) => ({
        value: item,
        label: null,
      }));

      return state
        .set('tagModalFetching', false)
        .set('tagModalTag', tag)
        .set('initialTagObject', initialTagObject)
        .set('tagModalDocuments', documents);
    }
    case OPEN_TAG_MODAL: {
      return state
        .set('isTagModalOpen', true)
        .set('tagModalFetching', true);
    }
    default:
      return state;
  }
}

export default filesContainerReducer;
