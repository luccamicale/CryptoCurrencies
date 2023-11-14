import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Coinbase', 'Binance', 'Kraken', 'Gemini', 'Bitstamp'],
          datasets: [{
            data: data,
            backgroundColor: [
              '#FFD700', // Amarillo dorado
              '#FFB6C1', // Rosa claro
              '#98FB98', // Verde menta
              '#87CEEB', // Azul cielo
              '#FFA07A', // Salmón claro
            ],
            borderColor: [
              '#FFD700',
              '#FFB6C1',
              '#98FB98',
              '#87CEEB',
              '#FFA07A',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          aspectRatio: 1,
          plugins: {
            legend: {
              display: true,
              position: 'right',
            },
            title: {
              display: true,
              text: 'Secure Platforms',
              font: {
                size: 20,
              },
              padding: 20,
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ maxWidth: '800px', maxHeight: '65%', marginLeft: '15%' }} />;
};

export default DonutChart;
