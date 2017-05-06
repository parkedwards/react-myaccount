import * as types from '../actions/ActionTypes';

const user = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.id;
    default:
      return state;
  }
};

export default user;
