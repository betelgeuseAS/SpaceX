import axios from 'axios';

import {
  FETCH_DATA_NEXT_LAUNCH,
  FETCH_DATA_LATEST_LAUNCH
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

export const fetchLatestLaunch = (data) => {
  return {
    type: FETCH_DATA_LATEST_LAUNCH,
    payload: data
  };
};
export const fetchLatestLaunchResolver = () => dispatch => {
  return axios.get(`${apiUrl}/past?limit=1`)
    .then(response => {
      dispatch(fetchLatestLaunch(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
