import React from 'react';
import './CryptoGrid.css';

export const CryptoGrid = ({ list }) => {
    return (
        <>
            {
                list && list.map(({ id, name, current_price, image,  last_updated, price_change_24h,symbol}) => {
                    return (
                        <article key={id} className='crArticle'>
                            <img src={image} alt={`img for crypto ${name}`} />
                            <h3>{name}</h3>
                            <h1>{`$ ${current_price}`}</h1>

                            <span className="tooltiptext">
                                <ul>
                                    <li>
                                        Last update: {new Date(last_updated).toLocaleString()}
                                    </li>
                                    <li>
                                        Price change (24hrs): {parseFloat(price_change_24h).toFixed(6)}
                                    </li>
                                </ul>
                            </span>
                        </article>
                    );
                })
            }
        </>
    );
};
