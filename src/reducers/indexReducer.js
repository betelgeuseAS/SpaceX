import { combineReducers } from 'redux';

import { nextLaunchReducer } from './nextLaunchReducer';
import { pastLaunchesReducer } from './pastLaunchesReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer,
  pastLaunches: pastLaunchesReducer
});
