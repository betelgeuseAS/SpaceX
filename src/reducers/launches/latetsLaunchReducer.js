import {
  FETCH_DATA_LATEST_LAUNCH,
} from '../../constants/constants';

const	initialState = {};

export function	latestLaunchReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_LATEST_LAUNCH:
      return action.payload;
    default:
      return state;
  }
}
