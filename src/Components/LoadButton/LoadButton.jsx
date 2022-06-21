import React,{useState} from 'react';
import './LoadButton.css';

// Constants
import { API } from '../../AppConstants';

export const LoadButton = ({
    Cryptos,
    setCryptos,
}) => {
    
    const [Page, setPage] = useState(1);
    
    const handleClick = () => {
        if (Page < 7) {            
            let nextPage = Page + 1;
            setPage(nextPage);
    
            fetch(API+nextPage).then((results) => results.json().then(elements => {
            setCryptos([...Cryptos,...elements]);
            }));
        } else {
            alert('You reach the limit :D');
        }
    };

    return (
        <i className="fa-solid fa-rotate" id="more" onClick={handleClick}></i>
    );
};