import axios from 'axios';

const API_ID = '9008b86fd96369cc36cdc4a509540e10';
const MAIN_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_ID;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${MAIN_URL}&q=${city},us`;
    const data = axios.get(url);


    return {
        type: 'FETCH_WEATHER',
        payload: data
    }
}


//http://api.openweathermap.org/data/2.5/forecast?appid=9008b86fd96369cc36cdc4a509540e10&q=cleveland,us