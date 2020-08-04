import { SET_DATA, RESET_DATA, SET_FECTHING_DATA, SET_SEARCH_VALUE } from './actions';

const initialState = {
  fetchingData: false,
  data: [],
  fetchedSuccess: false,
  searchValue: null,
  lastPage: null
};

function reducer(state = initialState, action) {
switch(action.type) {
  case SET_DATA:
    return {
        ...state,
        data: action.data.results,
        lastPage: action.data.last_page,
        fetchingData: false,
        fetchedSuccess: true
    };
  case RESET_DATA:
    return {
      fetchingData: false,
      data: [],
      fetchedSuccess: false,
      errorData: [],
      lastPage: null
    };
  case SET_FECTHING_DATA:
    return {
        ...state,
        fetchingData: action.data
    }; 
  case SET_SEARCH_VALUE:
    return {
        ...state,
        searchValue: action.data
    }; 
  default:
    return state;
  }
}

export default reducer;