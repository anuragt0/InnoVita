import React from 'react';
import "./css/app.css"
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

import 'chart.js/auto';

const ChartComponent = () => {
  // Dummy data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  ///////////////////
  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF5733', '#3399FF', '#FFD700', '#33CC33', '#800080'],
      },
    ],
  };
  ///////////

  const chartOptions = {
    
  };
  

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
      <Pie data={pieChartData} options={chartOptions} />

    </div>
  );
};


const LeftNav = () => {
  return (
    <div className="left-nav">
      <ul>
        <li>About Us</li>
        <li>Analysis</li>
        <li>Component</li>
        <button className="featuresSection slideToDown" id="homeFeature_1">
      <h1 className="featuresText">Get notified</h1>
      <img
        alt="Get notified"
        className="featuresImg"
        src="https://static.vecteezy.com/system/resources/thumbnails/021/080/946/small/speedometer-design-illustration-isolated-on-transparent-background-free-png.png"
        style={{ width: '135px', marginTop: '22px' }}
      />
    </button>


    <button className="featuresSection slideToDown" id="homeFeature_1">
      <h1 className="featuresText">personalised report</h1>
      <img
     
        className="featuresImg"
        src="https://www.datapine.com/blog/wp-content/uploads/2018/05/patient-satisfaction-dashboard.png"
        style={{ width: '235px', marginTop: '2px' }}
      />
    </button>
    
              </ul>
    </div>
  );
};

export  {LeftNav,ChartComponent};
