import {
  FETCH_DATA_NEXT_LAUNCH,
} from '../../constants/constants';

const	initialState = {};

export function	nextLaunchReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_NEXT_LAUNCH:
      return action.payload;
    default:
      return state;
  }
}
