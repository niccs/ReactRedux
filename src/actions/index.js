import axios from "axios";
const API_KEY = "2b4359cf0473e8b6cbed076117ea1383";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function selectBook(book) {
  // console.log(`book selected is ${book.title}`);
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  // const request = fetch(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function fetchSensorData(city) {
  const url = "http://localhost:4000/sensors/";
  // const request = fetch(url);
  const request = axios.get(url);

  return {
    type: "FETCH_SENSOR_DATA",
    payload: request
  };
}
