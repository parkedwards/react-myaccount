import * as types from '../actions/ActionTypes';

const INITIAL_USER_STATE = {
  _id: null,
  username: null,
  first_name: null,
  last_name: null,
  isFetching: false,
};

const user = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RECEIVE_USER:
      return Object.assign({}, state, {
        id: action._id,
        username: action.username,
        first_name: action.first_name,
        last_name: action.last_name,
        isFetching: false,
      });
    default:
      return state;
  }
};

export default user;
