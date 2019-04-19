import { combineReducers } from 'redux';

import { nextLaunchReducer } from './nextLaunchReducer';
import { pastLaunchesReducer } from './pastLaunchesReducer';
import { upcomingLaunchesReducer } from './upcomingLaunchesReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer,
  pastLaunches: pastLaunchesReducer,
  upcomingLaunches: upcomingLaunchesReducer
});
