import axios from 'axios';

export function FETCH_WEATHER_INFO(zip) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`);
}
