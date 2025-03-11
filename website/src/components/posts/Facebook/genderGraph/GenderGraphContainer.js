import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import data from "./graphData.js";

export default function GenderGraphContainer() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "10px" }}>
        Historical - Grad Enrollment of Women
      </h2>
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 40, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" fontSize="1rem" />

          {/* Left Y-Axis (Percentage Enrolled) */}
          <YAxis
            yAxisId="left"
            fontSize="1rem"
            unit="%"
            domain={[5, 25]} // Adjust based on range
            tick={{ fill: "#004f9e" }} // Blue
          />

          {/* Right Y-Axis (Number Enrolled) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            fontSize="1rem"
            domain={[175, 525]} // Adjust based on range
            tick={{ fill: "#b22222" }} // Red
          />

          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend verticalAlign="top" height={36} />

          {/* Blue Line (Percent Enrolled) */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="percent"
            stroke="#004f9e"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            unit="%"
          />

          {/* Red Line (Number Enrolled) */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="number"
            stroke="#b22222"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
