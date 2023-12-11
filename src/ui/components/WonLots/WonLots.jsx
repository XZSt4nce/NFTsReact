import React, {useContext, useEffect, useState} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {EmptyListPlug} from "../EmptyListPlug/EmptyListPlug";

export const WonLots = () => {
    const {wallet} = useContext(Context);
    const [lots, setLots] = useState([]);

    useEffect(() => {
        (async () => {
            await Service.getWonLots(wallet)
                .then((data) => {
                    if (data) {
                        setLots(data);
                    }
                });
        })();
    }, []);

    return (
        <>
            {lots.length > 0 && (
                <WhiteContainer>
                    <h1 className={"text-center"}>Выигранные лоты</h1>
                    {lots.length > 0 ? (
                        <ListGroup>
                            {lots.map((lot, idx) => (
                                <ListGroupItem key={idx}>ID коллекции: {lot}</ListGroupItem>
                            ))}
                        </ListGroup>
                    ) : <EmptyListPlug />}
                </WhiteContainer>
            )}
        </>
    );
};