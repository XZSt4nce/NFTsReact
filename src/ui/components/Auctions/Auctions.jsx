import React, {useContext, useEffect} from 'react';
import {Context} from "../../../core/ContextWrapper";
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {EmptyListPlug} from "../EmptyListPlug/EmptyListPlug";
import {Auction} from "../../kit/Auction/Auction";

export const Auctions = () => {
    const {auctions, updateAuctions} = useContext(Context);

    useEffect(() => {
        (async () => {
            await updateAuctions();
        })();
    }, []);

    return (
        <WhiteContainer>
            <h1>Аукцион</h1>
            <div className={"w-100 d-flex flex-column gap-2 overflow-auto"} style={{maxHeight: "1000px"}}>
                {auctions.filter((auction) => auction.isActive || Date.now() / 1000 < +auction.timeEnd).length > 0 ? auctions.map((auction, idx) =>
                    (auction.isActive || Date.now() / 1000 < +auction.timeEnd) && (
                        <Auction auction={auction} key={idx} index={idx}/>
                    )) : <EmptyListPlug />}
            </div>
        </WhiteContainer>
    );
};