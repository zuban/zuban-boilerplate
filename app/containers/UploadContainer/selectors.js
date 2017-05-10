import { createSelector } from 'reselect';

/**
 * Direct selector to the uploadContainer state domain
 */
const selectUploadContainerDomain = () => (state) => state.get('uploadContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UploadContainer
 */

const makeSelectUploadContainer = () => createSelector(
  selectUploadContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUploadContainer;
export {
  selectUploadContainerDomain,
};
