import { GET_WEATHER, GET_FORECAST, ERROR_WEATHER } from '../action-type/index';
const initialState = {
  weather: '',
  forecast: '',
  error: ''
};
const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_WEATHER :
      return {
        ...state,
        weather: action.payload
      }
      case GET_FORECAST :
        return {
          ...state,
          forecast: action.payload
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

