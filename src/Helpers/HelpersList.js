export const FilterList = (CryptoCurrencys, Search) => {
    let CryptosM = [...CryptoCurrencys];

    if (Search) {
       CryptosM = CryptosM.filter(crypto => crypto.name.toLowerCase().includes(
            Search.toLowerCase()
        ));
    }

    return CryptosM;
};

export const OrderListName = (list, OrderName) => {
    let CryptosM = [...list];

    if (OrderName) {
        if (OrderName === 'asc') {            
            CryptosM = CryptosM.sort((c1, c2) => {
                if (c1.name.toLowerCase() > c2.name.toLowerCase()) {
                    return 1;
                }
                if (c1.name.toLowerCase() < c2.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
        } else {
            CryptosM = CryptosM.sort((c1, c2) => {
                if (c1.name.toLowerCase() < c2.name.toLowerCase()) {
                    return 1;
                }
                if (c1.name.toLowerCase() > c2.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
        }
    }

    return CryptosM;
};

export const OrderListPrice = (list, OrderPrice, OrderName) => {
    let CryptosM = [...list];

    if (OrderPrice) {
        if (OrderPrice === 'asc') {
            CryptosM = CryptosM.sort((c1, c2) => {
                if (c1.current_price > c2.current_price) {
                    return 1;
                }
                if (c1.current_price < c2.current_price) {
                    return -1;
                }
                return 0;
            });
        } else {
            CryptosM = CryptosM.sort((c1, c2) => {
                if (c1.current_price < c2.current_price) {
                    return 1;
                }
                if (c1.current_price > c2.current_price) {
                    return -1;
                }
                return 0;
            });
        }
    }

    return CryptosM;
};