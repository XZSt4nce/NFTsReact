import React, {useContext, useEffect} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";
import {NFT} from "../../kit/NFT/NFT";

export const MyAssets = () => {
    const {wallet} = useContext(Context);
    const [assets, setAssets] = useContext([]);

    useEffect(() => {
        (async () => {
            await Service.getMyNFTs(wallet).then((data) => {
                if (data) {
                    setAssets(data);
                }
            });
        })();
    }, []);

    return (
        <WhiteContainer>
            {assets?.map((asset, idx) => (
                <NFT nft={asset} discount={0} key={idx} />
            ))}
        </WhiteContainer>
    );
};