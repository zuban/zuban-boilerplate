
import { fromJS } from 'immutable';
import demoContainerReducer from '../reducer';

describe('demoContainerReducer', () => {
  it('returns the initial state', () => {
    expect(demoContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
