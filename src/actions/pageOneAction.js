import { SET_YEAR }	from '../constants/constants';

export function	setYear(year)	{
  return {
    type:	SET_YEAR,
    payload: year,
  }
}
