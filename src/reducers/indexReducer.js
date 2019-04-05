import { combineReducers } from 'redux';
import { nextLaunchReducer } from './launches/nextLaunchReducer';
import { latestLaunchReducer } from './launches/latetsLaunchReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer,
  latestLaunch: latestLaunchReducer
});
