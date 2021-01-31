import React, { useState, useEffect } from "react";
import "./socialMedia.css";
import "../mainContent/mainContent.css";
import Chart from "react-apexcharts";
export default function AdHistogram(props) {
  const [histogramData] = useState(props.refreshTallies);
  //Will change the histogramConfig to accept different adnames instead of just Ad1, etc
  const [histogramConfig, setHistogramConfig] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
    },

    series: [
      {
        name: "Displayed",
        data: [
          {
            x: "Ad1",
            y: histogramData[0],
          },
          {
            x: "Ad2",
            y: histogramData[1],
          },
          {
            x: "Ad3",
            y: histogramData[2],
          },
          {
            x: "Ad4",
            y: histogramData[3],
          },
          {
            x: "Ad5",
            y: histogramData[4],
          },
          {
            x: "Ad6",
            y: histogramData[5],
          },
          {
            x: "Ad7",
            y: histogramData[6],
          },
          {
            x: "Ad8",
            y: histogramData[7],
          },
          {
            x: "Ad9",
            y: histogramData[8],
          },
          {
            x: "Ad10",
            y: histogramData[9],
          },
        ],
      },
    ],
    xaxis: {
      type: "category",
    },
  });

  //constantly update the chart every ADFREQUENCY ms
  useEffect((prevData) => {
    const refreshHistogram = setInterval(() => {
      console.log("updating histogram!");
      setHistogramConfig((prevConfig) => {
        const newConfig = {
          options: {
            ...prevConfig.options,
          },
          series: [
            {
              name: "Displayed",
              data: [
                {
                  x: "Ad1",
                  y: histogramData[0],
                },
                {
                  x: "Ad2",
                  y: histogramData[1],
                },
                {
                  x: "Ad3",
                  y: histogramData[2],
                },
                {
                  x: "Ad4",
                  y: histogramData[3],
                },
                {
                  x: "Ad5",
                  y: histogramData[4],
                },
                {
                  x: "Ad6",
                  y: histogramData[5],
                },
                {
                  x: "Ad7",
                  y: histogramData[6],
                },
                {
                  x: "Ad8",
                  y: histogramData[7],
                },
                {
                  x: "Ad9",
                  y: histogramData[8],
                },
                {
                  x: "Ad10",
                  y: histogramData[9],
                },
              ],
            },
          ],
          xaxis: {
            type: "category",
          },
        };
        return newConfig;
      });
    }, props.ADFREQUENCY);
    return () => clearInterval(refreshHistogram);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Chart
        options={histogramConfig.options}
        series={histogramConfig.series}
        type="bar"
        width="1000"
      />
      <div>DEBUGING: first refreshes is {histogramData[0]}</div>
    </div>
  );
}
