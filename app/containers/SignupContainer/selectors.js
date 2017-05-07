import { createSelector } from 'reselect';

/**
 * Direct selector to the signupContainer state domain
 */
const selectSignupContainerDomain = () => (state) => state.get('signupContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignupContainer
 */

const makeSelectSignupContainer = () => createSelector(
  selectSignupContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignupContainer;
export {
  selectSignupContainerDomain,
};
