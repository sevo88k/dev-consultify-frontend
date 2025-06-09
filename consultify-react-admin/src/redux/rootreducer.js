import { combineReducers } from 'redux';
import userSigninReducer from './Reducer/AuthReducer';
import loaderReducer from './Reducer/loaderReducer';
import AdminReducer from './Reducer/AdminReducer';

const reducer = combineReducers({
  userSigninReducer: userSigninReducer,
  adminReducer: AdminReducer,
  loaderReducer: loaderReducer
});

export default reducer;
