import axios from 'axios';

import {
  FETCH_DATA_ONE_MISSOIN
} from '../constants/constants';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchOneMission = (data) => {
  return {
    type: FETCH_DATA_ONE_MISSOIN,
    payload: data
  };
};
export const fetchOneMissionResolver = (id) => dispatch => {
  return axios.get(`${apiUrl}/${id}`)
    .then(response => {
      dispatch(fetchOneMission(response.data));
    })
    .catch(error => {
      throw(error);
    });
};
