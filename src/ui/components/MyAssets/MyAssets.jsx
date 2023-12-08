import React, {useContext, useEffect} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Context} from "../../../core/ContextWrapper";
import {NFT} from "../../kit/NFT/NFT";
import {EmptyListPlug} from "../EmptyListPlug/EmptyListPlug";

export const MyAssets = () => {
    const {assets, updateAssets} = useContext(Context);

    useEffect(() => {
        (async () => {
            await updateAssets();
        })();
    }, []);

    return (
        <WhiteContainer className={"align-items-center gap-2 overflow-auto"} style={{maxHeight: "800px"}}>
            <h1 className={"text-center"}>Мои ассеты</h1>
            {assets.length > 0 ? assets.map((asset, idx) => (
                <NFT nft={asset} key={idx} />
            )) : <EmptyListPlug />}
        </WhiteContainer>
    );
};