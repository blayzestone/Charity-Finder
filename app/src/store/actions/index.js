import axios from 'axios';
import { baseUrl, apiKey } from '../../constants';

export const FETCH_CHARITIES_START = "FETCH_CHARITIES_START";
export const FETCH_CHARITIES_SUCCESS = "FETCH_CHARITIES_SUCCESS";
export const FETCH_CHARITIES_FAILURE = "FETCH_CHARITIES_FAILURE";

export const fetchCharities = () => dispatch => {
  dispatch({ type: FETCH_CHARITIES_START });

  axios.get(`${baseUrl}?user_key=${apiKey}`)
    .then(res => {
      dispatch({ type: FETCH_CHARITIES_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARITIES_FAILURE, payload: err.message });
    });
}