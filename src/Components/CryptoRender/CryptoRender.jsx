import React, { useEffect, useState } from 'react';

// Styles
import './CryptoRender.css';

// Components
import { InputSearch } from '../InputSearch/InputSearch';
import { CryptoGrid } from '../CryptoGrid/CryptoGrid';
import { OrderByName } from '../OrderByName/OrderByName';
import { OrderByPrice } from '../OrderByPrice/OrderByPrice';

// Helpers
import { FilterList, OrderListName, OrderListPrice } from '../../Helpers/HelpersList';

export const CryptoRender = ({
    CryptoCurrencys,
    setResults,
    setSumCap }) => {

    const [Filters, setFilters] = useState({'Search':''});
    const [CryptoList, setCryptoList] = useState([]);

    const { Search, OrderPrice, OrderName } = Filters;

        useEffect(() => {
            if (CryptoCurrencys) {
                let cryptos = FilterList(CryptoCurrencys, Search);
                cryptos = OrderListName(cryptos, OrderName);
                cryptos = OrderListPrice(cryptos, OrderPrice,OrderName);
                setCryptoList([...cryptos]);
        }
    }, [CryptoCurrencys, setCryptoList, Search, OrderPrice, OrderName]);

    useEffect(() => {
        if (CryptoList) {
            let sumCap = 0;
            sumCap = CryptoList.reduce((sum, current) => {
                return sum += current.current_price;
            }, 0);
            setResults(CryptoList.length);
            setSumCap(parseFloat(sumCap).toFixed(2));
        }
    }, [CryptoList, setResults, setSumCap]);

    return (
        <>
            <div>  
                <div className='Form'>
                    <InputSearch Filters={Filters} setFilters={setFilters}
                        setCryptoList={setCryptoList} CryptoCurrencys={CryptoCurrencys} />
                    <OrderByName Filters={Filters} setFilters={setFilters} />
                    <OrderByPrice Filters={Filters} setFilters={setFilters} />
                </div>
            </div>

            <div>
                <div id="app">
                    <section className="Items">
                        <CryptoGrid list={CryptoList} />
                    </section>
                </div>
            </div>
        </>
    );
};
