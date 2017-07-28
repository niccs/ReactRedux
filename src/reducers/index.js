import { combineReducers } from "redux";
import BooksReducer from "./reducerBooks";
import ActiveBook from "./reducerActiveBook";
import WeatherReducer from "./reducerWeather";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer
});

export default rootReducer;
