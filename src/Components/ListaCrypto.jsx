import React from 'react';

export const ListaCrypto = ({ lista }) => {
    return (
        <>
            {
                lista && lista.map(({ id, name, current_price, image }) => {
                    return (
                        <article key={id}>
                            <img src={image} alt={`img for crypto ${name}`} />
                            <h3>{name}</h3>
                            <h1>{`$ ${current_price}`}</h1>
                        </article>
                    );
                })
            }
        </>
    );
};
