import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

export const SellNFT = () => {
    const {wallet, updateAssets} = useContext(Context);

    const sell = async (ev) => {
        ev.preventDefault();
        const id = +ev.target[0].value;
        const amount = +ev.target[1].value;
        const price = +ev.target[2].value * 10**6;
        await Service.sellNFT(wallet, id, amount, price)
            .then(async (data) => {
                if (data) {
                    await updateAssets();
                }
            });
    }

    return (
        <WhiteContainer>
            <h1 className={"text-center"}>Продать NFT ассет</h1>
            <Form onSubmit={sell}>
                <FormGroup controlId={"form-nft"} type={"number"} min={1} label={"ID"} placeholder={"Введите идентификатор Вашей NFT"} />
                <FormGroup controlId={"form-amount"} type={"number"} min={1} label={"Количество"} />
                <FormGroup controlId={"form-price"} type={"number"} min={1} label={"Цена"} placeholder={"Введите количество PROFI"} />
                <Button className={"w-100"} type={"submit"} variant={'danger'}>Продать</Button>
            </Form>
        </WhiteContainer>
    );
};