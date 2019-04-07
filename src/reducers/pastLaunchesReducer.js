import {
  FETCH_DATA_PAST_LAUNCHES,
} from '../constants/constants';

const	initialState = [];

export function	pastLaunchesReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_PAST_LAUNCHES:
      return action.payload;
    default:
      return state;
  }
}
