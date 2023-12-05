import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

export const CreateSingleNFT = () => {
    const {wallet} = useContext(Context);

    const create = async (ev) => {
        ev.preventDefault();
        const title = ev.target[0].value;
        const description = ev.target[1].value;
        const image = ev.target[2].value;
        const price = ev.target[3].value;
        const amount = ev.target[4].value;
        await Service.createSingleNFT(wallet, title, description, image, price, amount);
    }

    return (
        <WhiteContainer>
            <h1 className={"text-center"}>Создать обособленную NFT</h1>
            <Form onSubmit={create}>
                <FormGroup controlId={'form-title'} label={"Название"} />
                <FormGroup controlId={'form-description'} label={"Описание"} />
                <FormGroup controlId={'form-image'} label={"Путь к  изображению"} />
                <FormGroup controlId={'form-price'} type={'number'} label={"Цена"} />
                <FormGroup controlId={'form-amount'} type={'number'} label={"Количество"} />
                <Button className={"w-100"} type={'submit'}>Создать</Button>
            </Form>
        </WhiteContainer>
    );
};