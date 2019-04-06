import { combineReducers } from 'redux';
import { nextLaunchReducer } from './launches/nextLaunchReducer';
import { pastLaunchesReducer } from './launches/pastLaunchesReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer,
  pastLaunches: pastLaunchesReducer
});
