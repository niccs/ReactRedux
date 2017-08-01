import { combineReducers } from "redux";
import BooksReducer from "./reducerBooks";
import ActiveBook from "./reducerActiveBook";
import WeatherReducer from "./reducerWeather";
import SensorDataReducer from "./reducerSensorData";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer,
  sensorData: SensorDataReducer
});

export default rootReducer;
