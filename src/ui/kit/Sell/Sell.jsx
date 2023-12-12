import React, {useContext, useEffect, useState} from 'react';
import {NFT} from "../NFT/NFT";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";
import {FormGroup} from "../FormInputs/FormGroup/FormGroup";
import {Button, Form} from "react-bootstrap";
import Web3 from "web3";

export const Sell = ({sell, index}) => {
    const {wallet, discount, updateSells} = useContext(Context);
    const [nft, setNft] = useState({});

    const buyNFT = async (ev) => {
        ev.preventDefault();
        const amount = ev.target[0].value;
        await Service.buyNFT(wallet, index, amount)
            .then(async (data) => {
                if (data) {
                    await updateSells();
                }
            });
    }

    const changePrice = async (ev) => {
        ev.preventDefault();
        const price = ev.target[0].value * 10**6;
        await Service.changeSellPrice(wallet, index, price)
            .then(async (data) => {
                if (data) {
                    await updateSells();
                }
            });
    }

    useEffect(() => {
        (async () => {
            await Service.getAsset(sell.NFTid)
                .then((data) => {
                    setNft(data);
                });
        })();
    }, [sell]);

    return (
        <div className={"w-100 d-flex flex-column align-items-center gap-2"}>
            <NFT nft={nft} />
            <p className={"w-100 overflow-hidden m-0"} style={{whiteSpace: "nowrap", textOverflow: "ellipsis"}}>Продавец: {sell.seller}</p>
            <p className={"w-100 m-0 text-end"}>Количество: {sell.amount}</p>
            <p className={"w-100 m-0 text-end"}>Цена: {discount ? (
                <><s>{sell.price / 10**6}</s>{"\t"}{(sell.price - sell.price * discount / 100) / 10**6}</>
            ) : sell.price / 10**6} PROFI</p>
            {Web3.utils.toChecksumAddress(wallet) === sell.seller ? (
                <Form className={"w-100"} onSubmit={buyNFT}>
                    <h3 className={"text-center"}>Купить NFT</h3>
                    <FormGroup label={"Новая цена"} placeholder={"Введите новую цену"} type={"number"} controlId={"form-price"} />
                    <Button className={"w-100"} type={"submit"} variant={"success"}>Купить</Button>
                </Form>
            ) : (
                <Form className={"w-100"} onSubmit={changePrice}>
                    <h3 className={"text-center"}>Изменить цену NFT</h3>
                    <FormGroup label={"Количество"} type={"number"} controlId={"form-amount"} />
                    <Button className={"w-100"} type={"submit"}>Изменить</Button>
                </Form>

            )}
        </div>
    );
};