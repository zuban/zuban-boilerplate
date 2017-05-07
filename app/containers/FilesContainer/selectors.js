import { createSelector } from 'reselect';

/**
 * Direct selector to the filesContainer state domain
 */
const selectFilesContainerDomain = () => (state) => state.get('filesContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FilesContainer
 */

const makeSelectFilesContainer = () => createSelector(
  selectFilesContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFilesContainer;
export {
  selectFilesContainerDomain,
};
