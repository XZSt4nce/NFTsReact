import React, {useContext} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

export const CreateCollectionNFT = () => {
    const {wallet, updateAssets, updateOwnerCollections} = useContext(Context);

    const create = async (ev) => {
        ev.preventDefault();
        const title = ev.target[0].value;
        const description = ev.target[1].value;
        const ids = ev.target[2].value.split(",").map((id) => +id);
        await Service.createCollectionNFT(wallet, title, description, ids)
            .then(async (data) => {
                if (data) {
                    await updateAssets();
                    await updateOwnerCollections();
                }
            });
    }

    return (
        <WhiteContainer className={""} style={{maxWidth: "500px"}}>
            <h1 className={"text-center"}>Создать коллекцию NFT</h1>
            <Form onSubmit={create}>
                <FormGroup controlId={'form-title'} label={"Название"} />
                <FormGroup controlId={'form-description'} label={"Описание"} />
                <FormGroup controlId={'form-ids'} label={"Идентификаторы NFT"} placeholder={"Введите идентификаторы NFT через запятую"} />
                <Button className={"w-100"} type={'submit'}>Создать</Button>
            </Form>
        </WhiteContainer>
    );
};