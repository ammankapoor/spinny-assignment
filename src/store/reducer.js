import { SET_DATA, RESET_DATA, SET_FECTHING_DATA } from './actions';

const initialState = {
  fetchingData: false,
  data: [],
  fetchedSuccess: false
};

function reducer(state = initialState, action) {
switch(action.type) {
  case SET_DATA:
    return {
        ...state,
        data: action.data,
        fetchingData: false,
        fetchedSuccess: true
    };
  case RESET_DATA:
    return {
      fetchingData: false,
      data: [],
      fetchedSuccess: false,
      errorData: []
    };
  case SET_FECTHING_DATA:
    return {
        ...state,
        fetchingData: action.data
    }; 
  default:
    return state;
  }
}

export default reducer;