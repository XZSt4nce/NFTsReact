import React from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormTimeGroup} from "../../kit/FormInputs/FormTimeGroup/FormTimeGroup";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";

export const StartAuction = () => {
    // ToDo: handler
    const start = async () => {

    }

    return (
        <WhiteContainer>
            <h1>Начать отложенный аукцион</h1>
            <Form onSubmit={start}>
                <FormTimeGroup label={"Время начала"} text={"Начать через"} controlId={"form-aside-time"} />
                <FormTimeGroup label={"Продолжительность"} text={"Будет длиться"} controlId={"form-duration"} />
                <FormGroup label={"Стартовая цена"} type={"number"} controlId={"form-start-price"} />
                <FormGroup label={"Максимальная цена"} type={"number"} controlId={"form-max-price"} />
                <Button type={"submit"}>Начать</Button>
            </Form>
        </WhiteContainer>
    );
};