import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

export default function AccuracyChart() {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const data = {
      labels: ["Microsoft", "Face++", "IBM", "Amazon", "Kairos"],
      datasets: [
        {
          label: "Darker female",
          backgroundColor: "#e58a84",
          data: [79.2, 65.5, 65.3, 68.63, 77.5],
        },
        {
          label: "Darker male",
          backgroundColor: "#b39ce4",
          data: [94, 99.3, 88, 98.74, 98.7],
        },
        {
          label: "Lighter female",
          backgroundColor: "#8cb492",
          data: [98.3, 90.2, 92.9, 92.88, 93.6],
        },
        {
          label: "Lighter male",
          backgroundColor: "#f7c795",
          data: [100, 99.2, 99.7, 100, 100],
        },
      ],
    };

    const chart = new ChartJS(ctx, {
      type: "bar",
      data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${context.parsed.y}%`,
            },
          },
          title: {
            display: true,
            text: "Accuracy of Face Recognition Technologies",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Accuracy (%)",
            },
          },
        },
      },
    });

    chartInstanceRef.current = chart;

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
