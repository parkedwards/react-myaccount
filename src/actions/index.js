import * as types from './ActionTypes';
// maybe import isomorphic fetch

export const selectView = view => (
  {
    type: types.SELECT_VIEW,
    view,
  }
);

