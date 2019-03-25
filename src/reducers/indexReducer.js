import { combineReducers } from 'redux';
import { launchesReducer } from './LaunchesReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	launchesReducer,
});
