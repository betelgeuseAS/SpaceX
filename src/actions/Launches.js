import axios from 'axios';

import { FETCH_DATA_NEXT_LAUNCH } from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3';

export const fetchNextLaunch = (data) => {
  return {
    type: FETCH_DATA_NEXT_LAUNCH,
    payload: data
  };
};
export const fetchNextLaunchResolver = () => dispatch => {
  return axios.get(`${apiUrl}/launches/next`)
    .then(response => {
      dispatch(fetchNextLaunch(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
