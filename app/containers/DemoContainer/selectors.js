import { createSelector } from 'reselect';

/**
 * Direct selector to the demoContainer state domain
 */
const selectDemoContainerDomain = () => (state) => state.get('demoContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DemoContainer
 */

const makeSelectDemoContainer = () => createSelector(
  selectDemoContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDemoContainer;
export {
  selectDemoContainerDomain,
};
