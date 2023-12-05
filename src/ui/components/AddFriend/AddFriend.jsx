import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

export const AddFriend = () => {
    const {wallet} = useContext(Context);
    const add = async (ev) => {
        ev.preventDefault();
        await Service.addFriend(wallet, ev.target[0].value);
    }

    return (
        <WhiteContainer className={""} style={{maxWidth: "500px"}}>
            <Form onSubmit={add}>
                <h1 className={"text-center"}>Добавить друга</h1>
                <p className={"text-center text-muted"}>Позволит другу использовать Ваш реферальный код</p>
                <FormGroup label={"Адрес"} controlId={'form-wallet'} placeholder={"Введите адрес друга"} />
                <Button type={'submit'} className={"w-100"}>Добавить</Button>
            </Form>
        </WhiteContainer>
    );
};