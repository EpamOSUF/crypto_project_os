import React from 'react';
import './OrderByPrice.css';

export const OrderByPrice = ({ Filters, setFilters }) => {
    
    const { OrderPrice } = Filters;
    
    const handleInputChange = ({ target: { value } }) => {
        setFilters({...Filters, 'OrderPrice':value, 'OrderName':''});
    };

    return (
        <div className='OrderPrice'>
            <div>
                <label>Order by price</label>
            </div>
        
            <select
                name="OrderPrice"
                onChange={handleInputChange}
                value={OrderPrice}
                defaultValue=""
            >

                <option disabled value="">Select:</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <i className={`fa-solid ${OrderPrice === 'asc' ? 'fa-arrow-down-short-wide' : 'fa-arrow-down-wide-short'}`}></i>
        </div>
    );
};
