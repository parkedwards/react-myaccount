import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import selectedView from '../reducers/selectedView';
import user from '../reducers/user';

// Uncomment if you want to save + load state into LocalStorage
// import { loadState, saveState } from './utils/localStorage';

const configureStore = () => {
  const rootReducer = combineReducers({
    selectedView,
    user,
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
  );

  // Uncomment to check initial state!
  // console.log('====================');
  // console.log(store.getState());
  // console.log('====================');

  return store;
};

export default configureStore;
