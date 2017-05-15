/*
 *
 * FilesContainer actions
 *
 */

import {
  INIT_DOCUMENTS,
  CHANGE_TAGS,
  ADD_TAG,
  CHANGE_TEXT,
  TOGGLE_MODAL,
  GET_DOCUMENT,
  UPDATE_EDITOR_STATE,
  UPDATE_MODAL_TAGS,
  SAVE_DOCUMENT
} from './constants';

export const init = () => ({
  type: INIT_DOCUMENTS,
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const changeTags = (tags) => ({
  type: CHANGE_TAGS,
  tags,
});

export const getDocumentById = (id) => ({
  type: GET_DOCUMENT,
  id,
});
export const updateEditorState = (state) => ({
  type: UPDATE_EDITOR_STATE,
  state,
});

export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
});

export const chageText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
export const changeModalTags = (tags) => ({
  type: UPDATE_MODAL_TAGS,
  tags,
});

export const saveDocument = (state) => ({
  type: SAVE_DOCUMENT,
  state,
});
