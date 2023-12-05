import React from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormGroup/FormGroup";
import Service from "../../../services/Service";

export const CreateCollectionNFT = () => {
    const create = async (ev) => {
        ev.preventDefault();
        const title = ev.target[0].value;
        const description = ev.target[1].value;
        const ids = ev.target[2].value.split(",").map((id) => +id);
        await Service.createCollectionNFT(title, description, ids);
    }

    return (
        <WhiteContainer className={""} style={{maxWidth: "500px"}}>
            <h1 className={"text-center"}>Создать коллекцию NFT</h1>
            <Form onSubmit={create}>
                <FormGroup controlId={'form-title'} label={"Название"} />
                <FormGroup controlId={'form-description'} label={"Описание"} />
                <FormGroup controlId={'form-ids'} label={"Идентификаторы NFT"} />
                <Button className={"w-100"} type={'submit'}>Создать</Button>
            </Form>
        </WhiteContainer>
    );
};