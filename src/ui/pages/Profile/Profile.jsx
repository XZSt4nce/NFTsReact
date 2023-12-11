import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../core/ContextWrapper";
import {Account} from "../../components/Account/Account";
import {Referal} from "../../components/Referal/Referal";
import {AddFriend} from "../../components/AddFriend/AddFriend";
import Service from "../../../services/Service";
import {CreateSingleNFT} from "../../components/CreateSingleNFT/CreateSingleNFT";
import {CreateCollectionNFT} from "../../components/CreateCollectionNFT/CreateCollectionNFT";
import {MyAssets} from "../../components/MyAssets/MyAssets";
import {TransferNFT} from "../../components/TransferNFT/TransferNFT";
import {ShowAsset} from "../../components/ShowAsset/ShowAsset";
import {SellNFT} from "../../components/SellNFT/SellNFT";
import {ShowCollection} from "../../components/ShowCollection/ShowCollection";
import {WonLots} from "../../components/WonLots/WonLots";
import {OwnerCollections} from "../../components/OwnerCollections/OwnerCollections";
import {StartAuction} from "../../components/StartAuction/StartAuction";
import Web3 from "web3";

const Profile = () => {
    const {wallet, owner, code} = useContext(Context);
    const [codeActivated, setCodeActivated] = useState(false);

    useEffect(() => {
        (async () => {
            await Service.getActivatedReferal(wallet).then(setCodeActivated);
        })();
    }, []);

    return (
        <>
            <Account />
            <WonLots />
            {!codeActivated && <Referal/>}
            {code && <AddFriend />}
            <TransferNFT />
            <SellNFT />
            {Web3.utils.toChecksumAddress(wallet) === owner && (
                <>
                    <StartAuction />
                    <CreateSingleNFT />
                    <CreateCollectionNFT />
                    <OwnerCollections />
                </>
            )}
            <ShowAsset />
            <ShowCollection />
            <MyAssets />
        </>
    );
};

export default Profile;