import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

export const TransferNFT = () => {
    const {wallet, updateAssets} = useContext(Context);

    const transfer = async (ev) => {
        ev.preventDefault();
        const to = ev.target[0].value;
        const id = ev.target[1].value;
        const amount = ev.target[2].value;
        await Service.transferNFT(wallet, to, id, amount)
            .then(async(data) => {
                if (data) {
                    await updateAssets();
                }
            })
    }

    return (
        <WhiteContainer>
            <h1 className={"text-center"}>Перевести NFT</h1>
            <Form onSubmit={transfer}>
                <FormGroup controlId={'form-wallet'} label={"Адрес получателя"} />
                <FormGroup controlId={'form-id'} type={"number"} min={1} label={"NFT ID"} placeholder={"Введите идентификатор NFT"} />
                <FormGroup controlId={'form-amount'} type={"number"} min={1} label={"Количество"} />
                <Button className={"w-100"} type={"submit"}>Отправить</Button>
            </Form>
        </WhiteContainer>
    );
};