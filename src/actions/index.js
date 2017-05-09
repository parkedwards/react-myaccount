import fetch from 'isomorphic-fetch';
import * as types from './ActionTypes';
// maybe import isomorphic fetch

// const API = 'https://infinite-crag-99070.herokuapp.com/authenticate';
const API = 'http://localhost:3000/authenticate';

export const selectView = view => (
  {
    type: types.SELECT_VIEW,
    view,
  }
);

export const requestUser = (username, password) => (
  {
    type: types.REQUEST_USER,
    username,
    password,
  }
);

export const receiveUser = (payload) => (
  {
    type: types.RECEIVE_USER,
    ...payload,
  }
);

// Thunk
export const fetchUser = (username, password) => (
  dispatch => {
    dispatch(requestUser(username, password)); // inform app state that API call is starting
    return fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
  }
);
