import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./graphData.js";

export default function GenderGraphContainer() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" dy={5} fontSize="1.1rem" />
        <YAxis fontSize="1.1rem" unit="%" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="women enrolled"
          stroke="#68b068"
          activeDot={{ r: 8 }}
          unit="%"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
