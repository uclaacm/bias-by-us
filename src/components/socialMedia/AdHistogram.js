import React from "react";
import "./socialMedia.css";
import Chart from "react-apexcharts";



export default function AdHistogram(props){
    const histogramData = [...props.histogramData];
    const histogramConfig = {
        options: {
            chart: {
                id: "basic-bar",
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              yaxis: {
                  labels: {
                      style: {
                          fontSize: "20px",
                          fontWeight: 600
                      }
                  }
              }
            },

            series: [
                {
                    name: "Times Shown",
                    data: histogramData,

                }
            ],
            
    };
    return(
      
        <div>
            <Chart
            options = {histogramConfig.options}
            series = {histogramConfig.series}
            type = "bar"
            width = "1000"
            />

        </div>
    )
}