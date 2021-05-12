import React, { useContext } from "react";
import { SocialMediaContext } from "./socialMediaHandler";
import "./socialMedia.css";
import Chart from "react-apexcharts";

export default function AdHistogram(props) {
  const histogramData = [...props.histogramData];
  const { setSelectedAd } = useContext(SocialMediaContext);
  const histogramConfig = {
    options: {
      chart: {
        id: "basic-bar",
        events: {
          dataPointSelection: function (event, chartContext, config) {
            console.log(
              config.w.config.series[config.seriesIndex].data[
                config.dataPointIndex
              ].x
            );
            //Instead of using a button on the side to display ad, user can simply click a section
            setSelectedAd(
              config.w.config.series[config.seriesIndex].data[
                config.dataPointIndex
              ].x
            );
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },

      yaxis: {
        labels: {
          style: {
            fontSize: "min(4vw,20px)",
            fontWeight: 600,
          },
        },
      },
    },

    series: [
      {
        name: "Times Shown",
        data: histogramData,
      },
    ],
  };
  return (
    <div className="ad-histogram-container">
      <Chart
        options={histogramConfig.options}
        series={histogramConfig.series}
        type="bar"
        height="600px"
      />
    </div>
  );
}
