import React, {useContext, useEffect} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Context} from "../../../core/ContextWrapper";
import {EmptyListPlug} from "../EmptyListPlug/EmptyListPlug";
import {Sell} from "../../kit/Sell/Sell";

export const Sells = () => {
    const {sells, updateSells} = useContext(Context);

    useEffect(() => {
        (async () => {
            await updateSells();
        })();
    }, []);

    return (
        <WhiteContainer className={"mw-100 align-items-center gap-2"}>
            <h1 className={"text-center"}>Продаваемые NFT</h1>
            <div className={"w-100 d-flex flex-column gap-2 overflow-auto"} style={{maxHeight: "800px"}}>
                {sells.filter((sell) => !sell.seller.includes("00000")).length > 0 ? sells.map((sell, idx) => (
                    !sell.seller.includes("00000") && <Sell sell={sell} index={idx} key={idx} />
                )) : <EmptyListPlug />}
            </div>
        </WhiteContainer>
    );
};