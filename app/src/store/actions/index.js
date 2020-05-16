import axios from 'axios';
import { baseUrl, apiKey } from '../../constants';

export const USER_LOGIN = "USER_LOGIN";
export const SAVE_CHARITY = "SAVE_CHARITY";
export const FETCH_CHARITIES_START = "FETCH_CHARITIES_START";
export const FETCH_CHARITIES_SUCCESS = "FETCH_CHARITIES_SUCCESS";
export const FETCH_CHARITIES_FAILURE = "FETCH_CHARITIES_FAILURE";


export const fetchCharities = (searchTerm = "", city = "", state = "", zipCode = "") => dispatch => {
  dispatch({ type: FETCH_CHARITIES_START });
  const params = `&searchTerm=${searchTerm}&city=${city}&state=${state}&zipCode=${zipCode}`;

  axios.get(`${baseUrl}?user_key=${apiKey}${params}`)
    .then(res => {
      dispatch({ type: FETCH_CHARITIES_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARITIES_FAILURE, payload: err.message });
    });
}

export const userLogin = (credentials = {}) => {
  return { type: USER_LOGIN, payload: credentials }
}

export const saveCharity = charity => {
  return { type: SAVE_CHARITY, payload: charity }
}