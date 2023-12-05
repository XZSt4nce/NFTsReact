import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../core/ContextWrapper";
import {Account} from "../../components/Account/Account";
import {Referal} from "../../components/Referal/Referal";
import {AddFriend} from "../../components/AddFriend/AddFriend";
import Service from "../../../services/Service";
import {CreateSingleNFT} from "../../components/CreateSingleNFT/CreateSingleNFT";
import {CreateCollectionNFT} from "../../components/CreateCollectionNFT/CreateCollectionNFT";
import {MyAssets} from "../../components/MyAssets/MyAssets";

const Profile = () => {
    const {wallet, owner, code} = useContext(Context);
    const [codeActivated, setCodeActivated] = useState(false);

    useEffect(() => {
        (async () => {
            await Service.getActivatedReferal(wallet).then(setCodeActivated);
        })();
    }, []);

    return (
        <div className={"d-flex flex-wrap flex-grow-1 align-items-start justify-content-start gap-2 p-3"}>
            {wallet ? (
                <>
                    <Account />
                    <MyAssets />
                    {!codeActivated && <Referal/>}
                    {code && <AddFriend />}
                    {wallet === owner && (
                        <>
                            <CreateSingleNFT />
                            <CreateCollectionNFT />
                        </>
                    )}
                </>
            ) : (
                <div className={"d-flex flex-grow-1 flex-column align-items-center text-white"}>
                    <h1>Здравствуйте, гость!</h1>
                    <h2>Нажмите "Подключиться" в правом верхнем углу экрана</h2>
                </div>
            )}
        </div>
    );
};

export default Profile;