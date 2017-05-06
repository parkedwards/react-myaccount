import * as types from '../actions/ActionTypes';

const selectedView = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_VIEW:
      return action.view;
    default:
      return state;
  }
};

export default selectedView;
