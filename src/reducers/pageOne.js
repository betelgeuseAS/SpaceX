import { SET_YEAR } from '../constants/constants';

const	initialState = {
  year: 2018,
  photos: [],
};

export function	pageOneReducer(state	=	initialState, action)	{
  switch(action.type)	{
    case SET_YEAR:
      return { ...state, year: action.payload	};
    default:
      return state;
  }
}
