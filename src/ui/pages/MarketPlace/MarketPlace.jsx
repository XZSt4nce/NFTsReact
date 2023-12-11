import React from 'react';
import {Sells} from "../../components/Sells/Sells";
import {Auctions} from "../../components/Auctions/Auctions";

const MarketPlace = () => {
    return (
        <>
            <Sells />
            <Auctions />
        </>
    );
};

export default MarketPlace;