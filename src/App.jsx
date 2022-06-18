import React, { useEffect, useState } from 'react';

//Styles
import './App.css';
// Constants
import { API } from './AppConstants';

// Components
import { InputBusqueda } from './Components/InputBusqueda';
import { ListaCrypto } from './Components/ListaCrypto';

export const App = () => {
  const [CryptoCurrencys, setCryptoCurrencys] = useState([]);
  const [Resultados, setResultados] = useState(0);
  const [SumCap, setSumCap] = useState(0);
  const [Busqueda, setBusqueda] = useState('');
  const [CryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    fetch(API).then((results) => results.json().then(elements => {
      setCryptoCurrencys([...elements]);
    }));
  }, []);

  useEffect(() => {
    if (CryptoCurrencys) {
      if (Busqueda) {
        setCryptoList(CryptoCurrencys.filter(crypto => crypto.name.toLowerCase().includes(
          Busqueda
        )));
      } else {
        setCryptoList([...CryptoCurrencys]);
      }
    }
  }, [CryptoCurrencys, setCryptoList, Busqueda]);

  useEffect(() => {
    if (CryptoList) {
      let sumCap = 0;
      sumCap = CryptoList.reduce((sum, current) => {
        return sum += current.current_price;
      }, 0);
      setResultados(CryptoList.length);
      setSumCap(parseFloat(sumCap).toFixed(2));
    }
  }, [CryptoList]);

  return (
    <div className="App">
      <div className="Main">
        <h1>CryptoCurrency OS <i className="fa-solid fa-rotate" id="more"></i></h1>
        <div className="Form">
          <InputBusqueda Busqueda={Busqueda} setBusqueda={setBusqueda} />
          <label id="results">Results: {Resultados}</label>
          <label id="market_cap">Sum Market Cap: $ {SumCap}</label>
        </div>
        <div id="app">
          <section className="Items">
            <ListaCrypto lista={CryptoList} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
