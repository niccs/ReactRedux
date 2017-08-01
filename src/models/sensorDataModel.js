class sensorDataModel {
  constructor(jsonResponse) {
    this.id = jsonResponse.id;
    this.temp = parseInt(jsonResponse.temp);
    this.humidity = parseInt(jsonResponse.humidity);
    this.sensor3 = parseInt(jsonResponse.sensor3);
  }
}

export default sensorDataModel;
