/*
 *
 * FilesContainer actions
 *
 */

import {
  INIT_DOCUMENTS,
  CHANGE_TAGS,
  ADD_TAG,
} from './constants';

export const init = () => ({
  type: INIT_DOCUMENTS,
});

export const changeTags = (tags) => ({
  type: CHANGE_TAGS,
  tags,
});

export const addTag = (tag) => ({
  type: ADD_TAG,
  tag,
});
