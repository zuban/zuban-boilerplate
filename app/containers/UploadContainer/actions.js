/*
 *
 * UploadContainer actions
 *
 */

import {
  INIT_SVG_UPLOAD,
} from './constants';


export const upload = (files) => ({
  type: INIT_SVG_UPLOAD,
  files,
});
