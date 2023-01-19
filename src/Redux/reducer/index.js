import { GET_WEATHER, ERROR_WEATHER } from '../action-type/index';
const initialState = {
  weather: '',
  error: ''
};
const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_WEATHER :
      return {
        ...state,
        weather: action.payload
      }
      case ERROR_WEATHER :
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;

  }

}

export default rootReducer;

