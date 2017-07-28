import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GMap from "../components/googleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    const temps = cityData.list.map(listData => {
      return listData.main.temp;
    });
    const humidity = cityData.list.map(listData => {
      return listData.main.humidity;
    });
    const pressure = cityData.list.map(listData => {
      return listData.main.pressure;
    });
    return (
      <tr key={cityName}>
        <td>
          <GMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color={"red"} />
        </td>
        <td>
          <Chart data={humidity} color={"blue"} />
        </td>
        <td>
          <Chart data={pressure} color={"green"} />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City</th>
            <th> Tempreature</th>
            <th> Pressure</th>
            <th> Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};
// promote SearchBar from component to container
export default connect(mapStateToProps)(WeatherList);
