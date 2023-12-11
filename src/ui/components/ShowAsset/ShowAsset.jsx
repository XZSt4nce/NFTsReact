import React, {useState} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {NFT} from "../../kit/NFT/NFT";

export const ShowAsset = () => {
    const [asset, setAsset] = useState({});

    const show = async (ev) => {
        ev.preventDefault();
        const id = +ev.target[0].value;
        await Service.getAsset(id)
            .then((data) => {
                if (data) {
                    setAsset(data);
                }
            });
    }

    return (
        <WhiteContainer>
            <h1>Посмотреть NFT</h1>
            <Form onSubmit={show}>
                <FormGroup controlId={"form-id"} type={"number"} min={1} label={"ID"} placeholder={"Введите идентификатор NFT"} />
                <Button className={"w-100 mb-1"} type={'submit'}>Получить</Button>
            </Form>
            {asset.id && <NFT nft={asset} />}
        </WhiteContainer>
    );
};