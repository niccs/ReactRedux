import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import MainChart from "../components/mainChart";
import GMap from "../components/googleMap";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];
class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    console.log(`${lat} and ${lon}`);

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
