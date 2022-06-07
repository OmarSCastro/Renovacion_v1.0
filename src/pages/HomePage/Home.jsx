import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { Container } from "./../../Components/Container/Container";

export const Home = () => {
  const [chartData] = useState({
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
        hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <Container>
      <div className="h-screen w-full flex justify-content-center align-items-center ">

        <Chart
          type="pie"
          data={chartData}
          options={lightOptions}
          style={{ position: 'relative', width: '40%' }}
          />
      </div>
    </Container>
  );
};
