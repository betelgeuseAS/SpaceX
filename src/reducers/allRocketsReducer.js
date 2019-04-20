import {
  FETCH_DATA_ALL_ROCKETS,
} from '../constants/constants';

const	initialState = [];

export function	allRocketsReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_ALL_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}
