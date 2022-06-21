import React, { useEffect, useState } from 'react';

//Styles
import './App.css';
// Constants
import { API } from './AppConstants';

// Components
import { CryptoRender } from './Components/CryptoRender/CryptoRender';
import { LoadButton } from './Components/LoadButton/LoadButton';

export const App = () => {
  const [CryptoCurrencys, setCryptoCurrencys] = useState([]);
  const [Results, setResults] = useState(0);
  const [SumCap, setSumCap] = useState(0);

  useEffect(() => {
    const FIRST_PAGE = 1;
    fetch(API+FIRST_PAGE).then((results) => results.json().then(elements => {
      setCryptoCurrencys([...elements]);
    }));
  }, []);

  return (
    <div className="App">
      <div className="Main">
        <h1>CryptoCurrency OS
          <LoadButton
          Cryptos={CryptoCurrencys}
          setCryptos={setCryptoCurrencys} />
        </h1>
        <div className="Header">
          <hr />
          <label id="results">Results: {Results}</label>
          <label id="market_cap">Sum Market Cap: $ {SumCap}</label>
        </div>
        <CryptoRender
          CryptoCurrencys={CryptoCurrencys}
          setResults={setResults}
          setSumCap={setSumCap} />
      </div>
    </div>
  );
};