import { combineReducers } from 'redux';

import gistReducer from './index.duck';

export default combineReducers({
  gistState: gistReducer
});
