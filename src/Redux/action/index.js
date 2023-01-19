import axios from "axios";
import { GET_WEATHER, ERROR_WEATHER } from '../action-type/index';

const key = 'b1421f159b8186bfe9efc74b376fbc26';
export function getData (search) {
  return async (dispatch) => {
    try{
      const api = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`); 
      dispatch({
        type: GET_WEATHER,
        payload: api.data
      })
    }catch{
      dispatch({
        type: ERROR_WEATHER,
        payload: 'not found'
      })
    }
  }
 }