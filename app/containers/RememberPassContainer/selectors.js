import { createSelector } from 'reselect';

/**
 * Direct selector to the rememberPassContainer state domain
 */
const selectRememberPassContainerDomain = () => (state) => state.get('rememberPassContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RememberPassContainer
 */

const makeSelectRememberPassContainer = () => createSelector(
  selectRememberPassContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectRememberPassContainer;
export {
  selectRememberPassContainerDomain,
};
