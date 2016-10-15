import axios from 'axios';

const API_ID = '9008b86fd96369cc36cdc4a509540e10';
const MAIN_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_ID;

export function fetchWeather(city) {
    const url = `${MAIN_URL}&q=${city},us`;
    const data = axios.get(url);


    return {
        type: 'FETCH_WEATHER',
        payload: data
    }
}


export function fetchWeatherAll() {
    var MAIN_URL2 = MAIN_URL;
    function getCity1() {
        return axios.get(`${MAIN_URL}&q=Seattle,us`);
    }
    
    function getCity2() {
        return axios.get(`${MAIN_URL}&q=Phoenix,us`);
    }
    
    function getCity3() {
        return axios.get(`${MAIN_URL}&q=Atlanta,us`);
    }
    
    var requests = Promise.all([getCity1(), getCity2(), getCity3()])
      .then((arr) => {
          var data = {
              city1: arr[0],
              city2: arr[1],
              city3: arr[2]
          };
          
          return data;
      });
    
    console.log(requests);
    return {
        type: 'FETCH_WEATHER_ALL',
        payload: requests
    }
}


//http://api.openweathermap.org/data/2.5/forecast?appid=9008b86fd96369cc36cdc4a509540e10&q=cleveland,us