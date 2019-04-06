import { combineReducers } from 'redux';
import { nextLaunchReducer } from './nextLaunchReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer
});
