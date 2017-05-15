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

export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
});

export const chageText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
