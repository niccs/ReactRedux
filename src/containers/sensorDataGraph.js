import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSensorData } from "../actions/index";
import SensorModel from "../models/sensorDataModel";

import MainChart from "../components/mainChart";
import SocketController from "../controllers/socketController";

const data1 = [
  { id: "Page A", temp: 4000, humidity: 2400, sensor1: 2400 },
  { id: "Page B", temp: 3000, humidity: 1398, sensor1: 2210 },
  { id: "Page C", temp: 2000, humidity: 9800, sensor1: 2290 },
  { id: "Page D", temp: 2780, humidity: 3908, sensor1: 2000 },
  { id: "Page E", temp: 1890, humidity: 4800, sensor1: 2181 },
  { id: "Page F", temp: 2390, humidity: 3800, sensor1: 2500 },
  { id: "Page G", temp: 3490, humidity: 4300, sensor1: 2100 }
];
class SensorData extends Component {
  componentDidMount() {
    const socketController = new SocketController();
    this.props.fetchSensorData();
    socketController.createSensorChannel(this.onNewSensorDataRecd);
  }
  // chat request status recd(acknowledged) from socket, we dont need a modal for this
  onNewSensorDataRecd = (channelState, channelObj) => {
    // console.log('wink_state: onChatRequestReceived:',channelObj);
    // for new_conversation state, pop an alert to user to ACCEPT/BLOCK/HOLD the request
    console.log("is it even listening");
    if (channelState === "STATE_NEW") {
      console.log("************************Nix************************");
      console.log(channelObj);
    }
  };
  render() {
    console.log(this.props.sensorData);
    if (!this.props.sensorData.length > 0) {
      return <div>its empty</div>;
    } else {
      console.log(`nixxxx  ${this.props.sensorData.length}`);
      const data = this.props.sensorData;
      console.log(data[0]);
      const newDataSet = data[0].map(dataRow => {
        return new SensorModel(dataRow);
      });
      console.log(newDataSet);
      return (
        <div>
          <MainChart data={newDataSet} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ sensorData }) => {
  return { sensorData };
};
//anthing returned from this function will be props to container
function mapDispatchToProps(dispatch) {
  //when fetchWeather is called, result shud be passed to all reducers
  return bindActionCreators({ fetchSensorData: fetchSensorData }, dispatch); // this dispatch functions takes all the actions, funnel and gives them to all reducers
}
// promote SearchBar from component to container
export default connect(mapStateToProps, mapDispatchToProps)(SensorData);
