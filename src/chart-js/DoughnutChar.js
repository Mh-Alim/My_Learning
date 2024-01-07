import { Data } from './utils/Data';
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChar = () => {
  

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "green",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        hoverOffset: 4
        
      }
    ]
  });
  
  console.log("doub");
  return (
    <div  className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Doughnut style={{display: 'flex'}} data={chartData} />
    </div>
  )
}

export default DoughnutChar