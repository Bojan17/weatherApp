import axios from 'axios';

const API_Key =`b1b15e88fa797225412429c1c50c122a1`;  //4577f2665b04ec7710480482c4e939ed
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request= axios.get(url);
  console.log(request);

  return {
      type: FETCH_WEATHER,
      payload: request
  };
}
