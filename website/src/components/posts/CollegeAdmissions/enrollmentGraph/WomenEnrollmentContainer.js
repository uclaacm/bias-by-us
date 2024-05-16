import React from "react";
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./enrollmentData.js";

export default function WomenEnrollmentContainer() {
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
        <XAxis dataKey="name" dy={2} fontSize="1.1rem" />
        <YAxis fontSize="1.1rem" unit="" orientation="right">
          <Label value="Women Enrolled" angle={90} position="right" />
        </YAxis>
        <Tooltip />
        <Line
          type="monotone"
          dataKey="women enrolled"
          stroke="#d1001f"
          activeDot={{ r: 8 }}
          unit=""
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
