import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      
      if (myChart) {
        myChart.destroy();
      }

      // Crear un nuevo gráfico con barras horizontales
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Coinbase', 'Binance', 'Kraken', 'Gemini', 'Bitstamp'],
          datasets: [{
            label: 'Security (%)',
            data: data,
            backgroundColor: [
              'rgba(75, 192, 192, 0.9)',
              'rgba(255, 99, 132, 0.9)',
              'rgba(255, 205, 86, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(153, 102, 255, 0.9)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            barThickness: 42, 
          }],
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
            },
            y: {
              ticks: {
                color: '#80ffdb',
                font: 'Lora'
              },
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

  return <canvas ref={chartRef} style={{ maxWidth: '800px', maxHeight: '65%', marginLeft: '25%' }} />;
};

export default BarChart;
