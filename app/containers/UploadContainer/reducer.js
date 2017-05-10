/*
 *
 * UploadContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT_SVG_UPLOAD,
  UPLOAD_SVG_SUCCESS,
  UPLOAD_SVG_ERROR,
} from './constants';

const initialState = fromJS({
  errorMessage: null,
  infoMessage: null,
  fetching: false,
});

function uploadContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_SVG_UPLOAD:
      return state
        .set('fetching', true)
        .set('loginErrorMessage', null);
    case UPLOAD_SVG_SUCCESS:
      return state
        .set('fetching', false)
        .set('infoMessage', 'file upload success')
        .set('errorMessage', null);
    case UPLOAD_SVG_ERROR:
      return state
        .set('fetching', false)
        .set('errorMessage', action.error)
        .set('infoMessage', null);
    default:
      return state;
  }
}

export default uploadContainerReducer;
