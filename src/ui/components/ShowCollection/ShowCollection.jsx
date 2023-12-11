import React, {useState} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import Service from "../../../services/Service";
import {Button, Form} from "react-bootstrap";
import {FormGroup} from "../../kit/FormInputs/FormGroup/FormGroup";
import {Collection} from "../../kit/Collection/Collection";

export const ShowCollection = () => {
    const [collection, setCollection] = useState({});

    const show = async (ev) => {
        ev.preventDefault();
        setCollection({});
        const id = +ev.target[0].value;
        await Service.getCollection(id)
            .then((data) => {
                if (data) {
                    setCollection(data);
                }
            });
    }

    return (
        <WhiteContainer>
            <h1>Посмотреть коллекцию</h1>
            <Form onSubmit={show}>
                <FormGroup controlId={"form-id"} type={"number"} min={1} label={"ID"} placeholder={"Введите идентификатор коллекции"} />
                <Button className={"w-100 mb-1"} type={'submit'}>Получить</Button>
            </Form>
            {collection.id && (
                <Collection collection={collection} />
            )}
        </WhiteContainer>
    );
};