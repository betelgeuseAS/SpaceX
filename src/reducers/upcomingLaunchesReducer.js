import {
  FETCH_DATA_UPCOMING_LAUNCHES,
} from '../constants/constants';

const	initialState = [];

export function	upcomingLaunchesReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_UPCOMING_LAUNCHES:
      return action.payload;
    default:
      return state;
  }
}
