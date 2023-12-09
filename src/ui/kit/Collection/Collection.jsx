import React, {useEffect, useState} from 'react';
import Service from "../../../services/Service";
import {NFT} from "../NFT/NFT";

export const Collection = ({collection}) => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        (async () => {
            await Service.getAssets(collection.ids)
                .then((collectionAssets) => {
                    if (collectionAssets) {
                        setAssets(collectionAssets);
                    }
                })
        })();
    }, []);

    return (
        <div className={"p-2 rounded"} style={{backgroundColor: "#eeeeee"}}>
            <h1 className={"text-center"}>{collection.title}</h1>
            <p className={"p-1 rounded"} style={{backgroundColor: "lightgray"}}><b>Описание:</b><br />{collection.description}</p>
            <div className={"d-flex flex-column align-items-center gap-2 p-2 rounded"} style={{backgroundColor: "#cccccccc"}}>
                {assets.map((asset, idx) => (
                    <NFT nft={asset} key={idx} />
                ))}
            </div>
        </div>
    );
};