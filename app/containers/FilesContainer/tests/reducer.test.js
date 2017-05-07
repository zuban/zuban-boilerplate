
import { fromJS } from 'immutable';
import filesContainerReducer from '../reducer';

describe('filesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(filesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
