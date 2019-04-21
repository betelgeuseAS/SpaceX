import {
  FETCH_DATA_ONE_MISSOIN,
} from '../constants/constants';

const	initialState = {};

export function	oneMissionReducer(state = initialState, action)	{
  switch(action.type)	{
    case FETCH_DATA_ONE_MISSOIN:
      return action.payload;
    default:
      return state;
  }
}
