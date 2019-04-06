import axios from 'axios';

import {
  FETCH_DATA_NEXT_LAUNCH,
  FETCH_DATA_PAST_LAUNCHES
} from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3/launches';

export const fetchNextLaunch = (data) => {
  return {
    type: FETCH_DATA_NEXT_LAUNCH,
    payload: data
  };
};
export const fetchNextLaunchResolver = () => dispatch => {
  return axios.get(`${apiUrl}/next`)
    .then(response => {
      dispatch(fetchNextLaunch(response.data));
    })
    .catch(error => {
      throw(error);
    });
};

export const fetchPastLaunches = (data) => {
  return {
    type: FETCH_DATA_PAST_LAUNCHES,
    payload: data
  };
};
export const fetchPastLaunchesResolver = () => dispatch => {
  return axios.get(`${apiUrl}/past`)
    .then(response => {
      dispatch(fetchPastLaunches(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
