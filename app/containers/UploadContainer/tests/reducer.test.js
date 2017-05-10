
import { fromJS } from 'immutable';
import uploadContainerReducer from '../reducer';

describe('uploadContainerReducer', () => {
  it('returns the initial state', () => {
    expect(uploadContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
