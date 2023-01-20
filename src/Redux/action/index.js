import axios from "axios";
import { GET_WEATHER, GET_FORECAST, ERROR_WEATHER } from '../action-type/index';

const key = 'b1421f159b8186bfe9efc74b376fbc26';

export function getWeather (search) {
  return async (dispatch) => {
    try{
      const urlWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${key}&lang=es&q=${search}`);
      dispatch({
        type: GET_WEATHER,
        payload: urlWeather.data
      })
    }catch{
      dispatch({
        type: ERROR_WEATHER,
        payload: 'not found'
      })
    }
  }
 };

 export function getForecast (search) {
  return async (dispatch) => {
    try{
      const urlForecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${key}&lang=es&q=${search}`)
      dispatch({
        type: GET_FORECAST,
        payload: urlForecast.data
      })
    }catch{
      dispatch({
        type: ERROR_WEATHER,
        payload: 'not found'
      })
    }
  }
 }