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
  SAVE_DOCUMENT,
  DELETE_DOCUMENT,
  TOGGLE_TAG_MODAL,
  OPEN_TAG_MODAL,
  SAVE_TAG_MODAL,
  DELETE_TAG
} from './constants';

import {
  SET_LOGOUT
} from '../App/constants';


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

export const deleteDocument = () => ({
  type: DELETE_DOCUMENT,
});

export const toggleTagModal = () => ({
  type: TOGGLE_TAG_MODAL,
});

export const openTagModal = (tag) => ({
  type: OPEN_TAG_MODAL,
  tag,
});

export const saveTagModal = (formData) => ({
  type: SAVE_TAG_MODAL,
  formData,
});

export const deleteTag = () => ({
  type: DELETE_TAG,
});

export const logout = () => ({
  type: SET_LOGOUT,
});
