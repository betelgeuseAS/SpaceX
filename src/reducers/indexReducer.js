import { combineReducers } from 'redux';

import { nextLaunchReducer } from './nextLaunchReducer';
import { pastLaunchesReducer } from './pastLaunchesReducer';
import { upcomingLaunchesReducer } from './upcomingLaunchesReducer';
import { allRocketsReducer } from './allRocketsReducer';
import { oneMissionReducer } from './missionsReducer';

export	const	rootReducer	=	combineReducers({
  nextLaunch:	nextLaunchReducer,
  pastLaunches: pastLaunchesReducer,
  upcomingLaunches: upcomingLaunchesReducer,
  rockets: allRocketsReducer,
  mission: oneMissionReducer
});
