import axios from 'axios';
// const API_KEY = '45e3a0a000090189c644d2cbfd28a0b5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&units=imperial`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);  //this is just a promise we still don't have the data

  //before the return below, redux-promise middleware resolves the promise and fetches the data
  //and then passes it onto the reducer
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
