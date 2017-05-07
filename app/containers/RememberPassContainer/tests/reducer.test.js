
import { fromJS } from 'immutable';
import rememberPassContainerReducer from '../reducer';

describe('rememberPassContainerReducer', () => {
  it('returns the initial state', () => {
    expect(rememberPassContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
