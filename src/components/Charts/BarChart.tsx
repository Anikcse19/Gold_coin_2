import { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const [chartData] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div id="chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="1000px"
        height={200}
      />
    </div>
  );
};

export default BarChart;
