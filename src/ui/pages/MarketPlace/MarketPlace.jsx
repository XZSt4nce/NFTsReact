import React, {useContext, useEffect} from 'react';
import {Sells} from "../../components/Sells/Sells";
import {Auctions} from "../../components/Auctions/Auctions";
import {Context} from "../../../core/ContextWrapper";

const MarketPlace = () => {
    const {time, addSecond, updateTime} = useContext(Context);

    useEffect(() => {
        const timeoutID = setTimeout(addSecond, 1000);
        return () => {
            clearTimeout(timeoutID);
        }
    }, [time]);

    useEffect(() => {
        (async () => {
            await updateTime();
        })();
    }, []);

    return (
        <>
            <p className={"bg-white rounded p-2"}>Текущее время: {new Date(time * 1000).toLocaleString()}</p>
            <Sells />
            <Auctions />
        </>
    );
};

export default MarketPlace;