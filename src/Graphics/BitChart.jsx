import React, { useState, useEffect } from "react";
import axios from 'axios';
import Chart from 'chart.js/auto';
import { ContainerBitcoinChart } from "../components/Cryptos/style.ts";

// Declarar la variable fuera de la función del componente
let bitcoinChart = null;

function CryptoChart() {
  const [bitcoinPriceData, setBitcoinPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart', {
          params: {
            vs_currency: 'usd',
            days: '1',
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

  useEffect(() => {
    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      safelyCallDestroy();
    };
  }, []);

  const setupChart = () => {
    const ctx = document.getElementById('bitcoinChart').getContext('2d');
    const prices = bitcoinPriceData.map(data => data[1]);

    // Destruir el gráfico existente si ya existe
    safelyCallDestroy();

    // Crear un nuevo gráfico y asignarlo a la variable global
    bitcoinChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: prices.map((_, index) => index + 1),
        datasets: [{
          label: 'Precio de Bitcoin (USD)',
          data: prices,
          borderColor: '#c72cff',
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

  const safelyCallDestroy = () => {
    // Llamar a destroy solo si bitcoinChart es una instancia de Chart
    if (bitcoinChart instanceof Chart) {
      bitcoinChart.destroy();
    }
  };

  return (
    <ContainerBitcoinChart>
      <h2 style={{color: '#c72cff', fontFamily: 'Tajawal,sans-serif', fontWeight: '100'}}>The Most Important Crypto Currency: Bitcoin</h2>
      <canvas id="bitcoinChart" width="400" height="200"></canvas>
    </ContainerBitcoinChart>
  );
}

export default CryptoChart;
