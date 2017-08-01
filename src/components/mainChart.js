import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default ({ data, color }) => {
  return (
    <LineChart
      width={750}
      height={300}
      data={data}
      margin={{ top: 1, right: 1, left: 1, bottom: 1 }}
    >
      <XAxis dataKey="id" />
      <YAxis />
      <CartesianGrid strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temp"
        stroke="#8884d8"
        activeDot={{ r: 104 }}
      />
      <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
      <Line type="monotone" dataKey="sensor3" stroke="#FF0000" />
    </LineChart>
  );
};
