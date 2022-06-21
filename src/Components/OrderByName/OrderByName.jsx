import React from 'react';
import './OrderByName.css';

export const OrderByName = ({ Filters, setFilters }) => {
    
    const { OrderName } = Filters;
    
    const handleInputChange = ({ target: { value } }) => {
        setFilters({...Filters, 'OrderName':value, 'OrderPrice':''});
    };

    return (
        <div className='OrderName'>
            <div>
                <label>Order by name</label>
            </div>

            <select
                name="OrderName"
                onChange={handleInputChange}
                value={OrderName}
                defaultValue=""
            >

                <option disabled value="">Select:</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <i className={`fa-solid ${OrderName === 'desc'?'fa-arrow-down-z-a': 'fa-arrow-down-a-z'}`}></i>
        </div>
    );
};
