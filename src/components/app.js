import React, { Component } from "react";
import BookList from "../containers/bookList";
import BookDetail from "../containers/bookDetail";
import SearchBar from "../containers/searchBar";
import WeatherList from "../containers/weatherList";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
