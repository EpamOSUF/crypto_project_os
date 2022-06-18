import React from 'react';

export const InputBusqueda = ({ Busqueda, setBusqueda }) => {
    const handleInputChange = ({ target: { value } }) => {
        setBusqueda(value.toLowerCase());
    };

    return (
        <div>
            <input id="filter" name='buscador' value={Busqueda} onChange={handleInputChange} />
        </div>
    );
};
