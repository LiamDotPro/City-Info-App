import axios from 'axios';

const API_KEY = process.env.WEATHERAPI || import {API_KEY} from ../config/API_KEY.js;
const MAIN_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
  const url = `${MAIN_URL}&q=${city},us`;
  const data = axios.get(url);
  
  return {
    type   : 'FETCH_WEATHER',
    payload: data,
  };
}


export function fetchWeatherAll() {
  
  /**
   * @TODO Refactor these functions or use a better API
   */
  function getCity1() {
    return axios.get(`${MAIN_URL}&q=Seattle,us`);
  }
  
  function getCity2() {
    return axios.get(`${MAIN_URL}&q=Phoenix,us`);
  }
  
  function getCity3() {
    return axios.get(`${MAIN_URL}&q=Atlanta,us`);
  }
  
  const requests = Promise.all([getCity1(), getCity2(), getCity3()])
    .then((arr) => {
      const data = {
        city1: arr[0],
        city2: arr[1],
        city3: arr[2],
      };
      
      return data;
    });
  
  return {
    type   : 'FETCH_WEATHER_ALL',
    payload: requests,
  };
}


export function deleteCityInfo(idx) {
  
  return {
    type   : 'DELETE_CITY',
    payload: idx,
  };
}
