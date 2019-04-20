import axios from 'axios';

import {
  FETCH_DATA_ALL_ROCKETS
} from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchAllRockets = (data) => {
  return {
    type: FETCH_DATA_ALL_ROCKETS,
    payload: data
  };
};
export const fetchAllRocketsResolver = () => dispatch => {
  return axios.get(`${apiUrl}`)
    .then(response => {
      dispatch(fetchAllRockets(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
