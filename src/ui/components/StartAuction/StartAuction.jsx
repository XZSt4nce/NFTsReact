import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormTimeGroup} from "../../kit/FormInputs/FormTimeGroup/FormTimeGroup";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import {Context} from "../../../core/ContextWrapper";
import Service from "../../../services/Service";
import {FormProfi} from "../../kit/FormInputs/FormProfi/FormProfi";

export const StartAuction = () => {
    const {wallet, updateOwnerCollections} = useContext(Context);

    const start = async (ev) => {
        ev.preventDefault();
        const collectionId = ev.target[0].value;
        const asideTime = +ev.target[1].value * +ev.target[2].value;
        const duration = +ev.target[3].value * +ev.target[4].value;
        const startPrice = +ev.target[5].value * 10**6;
        const maxPrice = +ev.target[6].value * 10**6;
        await Service.startAuction(wallet, collectionId, asideTime, duration, startPrice, maxPrice)
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
                <FormGroup label={"ID коллекции"} placeholder={"Введите идентификатор Вашей коллекции"} type={"number"} min={1} controlId={"form-collection"} />
                <FormTimeGroup label={"Время начала"} text={"Начать через"} controlId={"form-aside-time"} />
                <FormTimeGroup label={"Продолжительность"} text={"Будет длиться"} min={1} controlId={"form-duration"} />
                <FormProfi label={"Стартовая цена"} placeholder={"Введите стартовую цену в PROFI"} controlId={"form-start-price"} />
                <FormProfi label={"Максимальная цена"} placeholder={"Введите максимальную цену в PROFI"} min={0.000001} controlId={"form-max-price"} />
                <Button className={"w-100"} type={"submit"}>Начать</Button>
            </Form>
        </WhiteContainer>
    );
};