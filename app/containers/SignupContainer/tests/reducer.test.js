
import { fromJS } from 'immutable';
import signupContainerReducer from '../reducer';

describe('signupContainerReducer', () => {
  it('returns the initial state', () => {
    expect(signupContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
