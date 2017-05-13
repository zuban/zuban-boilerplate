import { createSelector } from 'reselect';

/**
 * Direct selector to the filesContainer state domain
 */
const selectFilesContainerDomain = () => (state) => state.get('filesContainer');

/**
 * Direct selector to the filesContainer state domain
 */
const selectGlobalContainerDomain = () => (state) => state.get('global');

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
/**
 * Default selector used by FilesContainer
 */

const makeSelectGlobal = () => createSelector(
  selectGlobalContainerDomain(),
  (substate) => substate.toJS()
);

// export default makeSelectFilesContainer;
export {
  makeSelectFilesContainer,
  makeSelectGlobal,
};
