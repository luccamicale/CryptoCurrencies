import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destruir el gráfico anterior si existe
      if (myChart) {
        myChart.destroy();
      }

      // Crear un nuevo gráfico con barras horizontales
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Coinbase', 'Binance', 'Kraken', 'Gemini', 'Bitstamp'],
          datasets: [{
            label: 'Seguridad (%)',
            data: data,
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 205, 86, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            barThickness: 32, // Ajusta el ancho de las barras
          }],
        },
        options: {
          indexAxis: 'y', // Indica que el eje x debe ser horizontal
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    }

    // Limpiar y destruir el gráfico al desmontar el componente
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ maxWidth: '700px', maxHeight: '160%', marginLeft: '5%' }} />;
};

export default BarChart;
