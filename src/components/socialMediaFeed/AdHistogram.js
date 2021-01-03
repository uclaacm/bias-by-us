import React, { useState } from "react";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import placeholderAdPic from "../../assets/personalizedAds.png";
import Chart from "react-apexcharts";
export default function AdHistogram(props) {
  let chartConfig = {
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: [
          "Ad1",
          "Ad2",
          "Ad3",
          "Ad4",
          "Ad5",
          "Ad6",
          "Ad7",
          "Ad8",
          "Ad9",
          "Ad10",
        ],
      },
    },
    series: [
      {
        name: "Displayed",
        data: props.refreshTallies,
      },
    ],
  };

  return (
    <Chart
      options={chartConfig.options}
      series={chartConfig.series}
      type="bar"
      width="1000"
    />
  );
}
