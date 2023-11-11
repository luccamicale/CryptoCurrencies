import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import Navbar from "../Navbar/Navbar";
import { ContainerCryptosLi, ContainerCryptosUl, ContainerTitleCrypto } from "./style.ts";

function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
     .then(response => response.json())
     .then(data => setCryptoData(data.data));
  }, []);

  return (
    <div>
      <Navbar />
      <ContainerTitleCrypto>Exploring the Cryptocurrency Universe: The Top 100</ContainerTitleCrypto>
      <ContainerCryptosUl>
      <ContainerCryptosLi>
        <h2>Rank</h2>
        <p className="rank">Name</p>
        <p className="name">Symbol</p>
        <p className="symbol">Volume Usd 24Hr</p>
        <p className="changePercent">Change %</p>
        <p className="price">Price</p>
      </ContainerCryptosLi>
        {cryptoData.map(asset => (
          <ContainerCryptosLi key={asset.id}>
          <h2>{asset.rank}</h2>
          <p className="rank">{asset.name}</p>
          <p className="symbol">{asset.symbol}</p>
          <p className="name">{Math.round(asset.volumeUsd24Hr).toLocaleString()}</p>
          <p className="changePercent">{Math.round(asset.changePercent24Hr * 1000) / 1000}%</p>
          <p className="price">USD{(Math.round(asset.priceUsd * 1000) / 1000).toLocaleString()}</p>
        </ContainerCryptosLi>
        ))}
      </ContainerCryptosUl>
      
    </div>
  );
}

export default Crypto;
