import axios from 'axios';

import {
  FETCH_DATA_PAST_LAUNCHES
} from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3/launches';

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
