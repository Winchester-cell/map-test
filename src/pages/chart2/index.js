import React from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function MyChart() {
  const series = [
    {
      name: "Income",
      data: [4500, 6000, 8000, 7200, 9500, 11000],
    },
  ];

  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: {
        text: 'Months',
        style: {
          color: '#666',
          fontSize: '14px',
        }
      }
    },
    yaxis: {
      title: {
        text: 'Income ($)',
        style: {
          color: '#666',
          fontSize: '14px',
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['var(--colorB)'], 
  };

  return (
    <div className="w-full h-screen bg-[var(--colorA)]">
      <ApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}
