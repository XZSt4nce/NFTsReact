import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormTimeGroup} from "../../kit/FormInputs/FormTimeGroup/FormTimeGroup";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import {Context} from "../../../core/ContextWrapper";
import Service from "../../../services/Service";

export const StartAuction = () => {
    const {wallet, updateOwnerCollections} = useContext(Context);

    const start = async (ev) => {
        ev.preventDefault();
        const collectionIndex = ev.target[0].value;
        const asideTime = ev.target[1].value;
        const duration = ev.target[2].value;
        const startPrice = ev.target[3].value;
        const maxPrice = ev.target[4].value;
        await Service.startAuction(wallet, collectionIndex, asideTime, duration, startPrice, maxPrice)
            .then(async (data) => {
                if (data) {
                    await updateOwnerCollections();
                }
            });
    }

    return (
        <WhiteContainer>
            <h1>Начать отложенный аукцион</h1>
            <Form onSubmit={start}>
                <FormGroup label={"Индекс коллекции"} placeholder={"Введите порядковый номер Вашей коллекции"} type={"number"} min={1} controlId={"form-collection"} />
                <FormTimeGroup label={"Время начала"} text={"Начать через"} controlId={"form-aside-time"} />
                <FormTimeGroup label={"Продолжительность"} text={"Будет длиться"} controlId={"form-duration"} />
                <FormGroup label={"Стартовая цена"} type={"number"} controlId={"form-start-price"} />
                <FormGroup label={"Максимальная цена"} type={"number"} min={1} controlId={"form-max-price"} />
                <Button type={"submit"}>Начать</Button>
            </Form>
        </WhiteContainer>
    );
};