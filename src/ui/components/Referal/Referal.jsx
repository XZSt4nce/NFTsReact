import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import {Context} from "../../../core/ContextWrapper";
import Service from "../../../services/Service";

export const Referal = () => {
    const {wallet, updateBalance} = useContext(Context);

    const activateReferalCode = async (ev) => {
        ev.preventDefault();
        await Service.activateReferalCode(wallet, ev.target[0].value)
            .then(async (data) => {
                if (data) {
                    await updateBalance();
                }
            });
    }

    return (
        <WhiteContainer className={""} style={{maxWidth: "360px"}}>
            <Form onSubmit={activateReferalCode}>
                <h1 className={"text-center"}>Ввести код друга</h1>
                <FormGroup controlId={'form-code'} label={"Реферальный код"} />
                <Button className={"w-100"} type={'submit'}>Подтвердить</Button>
            </Form>
        </WhiteContainer>
    );
};