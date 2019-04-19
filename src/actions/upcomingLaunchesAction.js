import axios from 'axios';

import {
  FETCH_DATA_UPCOMING_LAUNCHES
} from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3/launches';

export const fetchUpcomingLaunches = (data) => {
  return {
    type: FETCH_DATA_UPCOMING_LAUNCHES,
    payload: data
  };
};
export const fetchUpcomingLaunchesResolver = () => dispatch => {
  return axios.get(`${apiUrl}/upcoming`)
    .then(response => {
      dispatch(fetchUpcomingLaunches(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
