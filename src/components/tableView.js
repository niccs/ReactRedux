import React from "react";

export default ({ data, color }) => {
  return (
    <table width="400">
      <tr>
        <th> Temp</th>
        <th> Humidity</th>
        <th> Sensor3</th>
      </tr>
      <tbody>
        {data.map(sensorRow => {
          return (
            <tr key={sensorRow.id}>
              <th>
                {sensorRow.temp}
              </th>
              <th>
                {sensorRow.humidity}
              </th>
              <th>
                {sensorRow.sensor3}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
