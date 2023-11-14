import React, { useState, useEffect } from "react";
import '../../styles/styles.css';
import Navbar from "../Navbar/Navbar";
import { ButtonFilter, ContainerBoxCrypto, ContainerButtonFilter, ContainerButtonSeeMore, ContainerCryptosLi, ContainerCryptosUl, ContainerDivBoxes, ContainerDivCryptoChartBoxes, ContainerImgBitcoin, ContainerInput, ContainerMainInputButton, ContainerSeeMore, ContainerTitleCrypto, MainContainerBoxesCryptos, TextCryptoBox } from "./style.ts";
import CryptoChart from "../../Graphics/BitChart";
import { FaBitcoin } from 'react-icons/fa';
import { SiBitcoin } from 'react-icons/si';
import Contact from "../Contact/Contact.tsx";


function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);
  const [filterType, setFilterType] = useState("rank");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets')
      .then(response => response.json())
      .then(data => setCryptoData(data.data));
  }, []);

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 20);
  };

  return (
    <div>
      <Navbar />
      <ContainerTitleCrypto>Exploring the Cryptocurrency Universe: The Top 100</ContainerTitleCrypto>
      <ContainerDivCryptoChartBoxes>
      <CryptoChart />
        <MainContainerBoxesCryptos>
        <ContainerBoxCrypto>
          {cryptoData
            .slice(0, 1) 
            .map((asset, index) => (
            <ContainerDivBoxes key={asset.id}>
              <div style={{display: 'flex', justifyContent: 'center'}}><SiBitcoin size={50} color="#fca311"/></div>
            </ContainerDivBoxes>
          ))}
        </ContainerBoxCrypto>
        <ContainerBoxCrypto>
          {cryptoData
            .slice(0, 1) 
            .map((asset, index) => (
            <ContainerDivBoxes key={asset.id}>
              <TextCryptoBox>Price: USD{(Math.round(asset.priceUsd * 1000) / 1000).toLocaleString()}</TextCryptoBox>
            </ContainerDivBoxes>
          ))}
        </ContainerBoxCrypto>
        <ContainerBoxCrypto>
          {cryptoData
            .slice(0, 1)
            .map((asset, index) => (
            <ContainerDivBoxes key={asset.id}>
              <TextCryptoBox>Supply: {(Math.round(asset.supply * 1000) / 1000).toLocaleString()} USD</TextCryptoBox>
            </ContainerDivBoxes>
          ))}
        </ContainerBoxCrypto>
        <ContainerBoxCrypto>
          {cryptoData
            .slice(0, 1)
            .map((asset, index) => (
            <ContainerDivBoxes key={asset.id}>
              <TextCryptoBox>Market Cap USD: {(Math.round(asset.marketCapUsd * 1000) / 1000).toLocaleString()}</TextCryptoBox>
        </ContainerDivBoxes>
          ))}
      </ContainerBoxCrypto>
        </MainContainerBoxesCryptos>
      </ContainerDivCryptoChartBoxes>
      <ContainerMainInputButton>
        <ContainerButtonFilter>
          <ButtonFilter onClick={() => handleFilter("price")}>Filter by Price</ButtonFilter>
          <ButtonFilter onClick={() => handleFilter("rank")}>Filter by Ranking</ButtonFilter>
          <ButtonFilter onClick={() => handleFilter("changePercent")}>Filter by Change % 24hr</ButtonFilter>
        </ContainerButtonFilter>
        <ContainerInput>
          <input
            type="text"
            style={{ width: '100%', borderRadius: '16px', backgroundColor: 'whitesmoke', color: 'gray' }}
            className="input-search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ContainerInput>
      </ContainerMainInputButton>
      <ContainerCryptosUl>
        <ContainerCryptosLi>
          <h2>Rank</h2>
          <p className="rank">Name</p>
          <p className="name">Symbol</p>
          <p className="symbol">Volume Usd 24Hr</p>
          <p className="changePercent">Change % 24hs</p>
          <p className="price">Price</p>
        </ContainerCryptosLi>
        {cryptoData
          .slice()
          .sort((a, b) => {
            if (filterType === "price") {
              return b.priceUsd - a.priceUsd;
            } else if (filterType === "rank") {
              return a.rank - b.rank;
            } else if (filterType === "changePercent") {
              return b.changePercent24Hr - a.changePercent24Hr;
            }
          })
          .filter(asset => asset.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((asset, index) => (
            index < visibleCount && (
              <ContainerCryptosLi key={asset.id}>
                <h2>{asset.rank}</h2>
                <p className="rank">{asset.name}</p>
                <p className="symbol">{asset.symbol}</p>
                <p className="name">{Math.round(asset.volumeUsd24Hr).toLocaleString()}</p>
                <p className="changePercent">{Math.round(asset.changePercent24Hr * 1000) / 1000}%</p>
                <p className="price">USD{(Math.round(asset.priceUsd * 1000) / 1000).toLocaleString()}</p>
              </ContainerCryptosLi>
            )
          ))}
      </ContainerCryptosUl>
      {visibleCount < cryptoData.length && (
        <ContainerSeeMore>
          <ContainerButtonSeeMore onClick={handleSeeMore}>See More</ContainerButtonSeeMore>
        </ContainerSeeMore>
      )}

      <Contact />

    </div>
  );
}

export default Crypto;
