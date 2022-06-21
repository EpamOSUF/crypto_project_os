import React from 'react';
import './InputSearch.css';

export const InputSearch = ({ Filters, setFilters }) => {

    const { Search } = Filters;
    
    const handleInputChange = ({ target: { value } }) => {
        setFilters({...Filters, 'Search':value});
    };

    const handleClear = () => {
        setFilters({...Filters, 'Search':''});
    };

    return (
        <div className='inputComponent'>
            <span> Search </span>
            <input id="filter" name='buscador' value={Search} onChange={handleInputChange} placeholder='Bitcoin, BNB...' />
            <button type="reset" onClick={handleClear}>&times;</button>
        </div>
    );
};
