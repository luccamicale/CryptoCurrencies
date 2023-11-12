import React, { useState, useEffect } from "react";
import axios from 'axios';
import Chart from 'chart.js/auto';

function CryptoChart() {
  const [bitcoinPriceData, setBitcoinPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: {
            vs_currency: 'usd',
            days: '30',
          },
        });

        const prices = response.data.prices;
        setBitcoinPriceData(prices);
      } catch (error) {
        console.error('Error fetching Bitcoin price data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Configura el gráfico cuando los datos estén disponibles
    if (bitcoinPriceData.length > 0) {
      setupChart();
    }
  }, [bitcoinPriceData]);

  const setupChart = () => {
    const ctx = document.getElementById('bitcoinChart').getContext('2d');
    const prices = bitcoinPriceData.map(data => data[1]); // Extrae los precios

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: prices.map((_, index) => index + 1), // Etiquetas para el eje X
        datasets: [{
          label: 'Precio de Bitcoin (USD)',
          data: prices,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false,
        }],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
        },
      },
    });
  };

  return (
    <div style={{width: '55%',}}>
      <h2>Gráfico de Variación del Precio de Bitcoin (Últimos 30 días)</h2>
      <canvas id="bitcoinChart" width="400" height="200"></canvas>
    </div>
  );
}

export default CryptoChart;
