import { combineReducers } from "redux";
import BooksReducer from "./reducerBooks";
import ActiveBook from "./reducerActiveBook";
import WeatherReducer from "./reducerWeather";
import SensorDataReducer from "./reducerSensorData";
import { reducer as Formreducer } from "redux-form";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer,
  sensorData: SensorDataReducer,
  form: Formreducer
});

export default rootReducer;
