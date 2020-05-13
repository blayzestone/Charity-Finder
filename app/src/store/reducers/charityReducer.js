import { 
  FETCH_CHARITIES_START, 
  FETCH_CHARITIES_SUCCESS, 
  FETCH_CHARITIES_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  charities: [],
  errorMessage: "",
}

export const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARITIES_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_CHARITIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        charities: action.payload,
      }
    case FETCH_CHARITIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}