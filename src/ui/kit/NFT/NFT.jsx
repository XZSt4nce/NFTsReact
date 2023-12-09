import React from 'react';
import {Card} from "react-bootstrap";

export const NFT = ({nft}) => {
    return (
        <Card style={{maxWidth: "300px"}}>
            <Card.Img variant="top" src={`assets/${nft.image}`} alt={"Фото не найдено"} />
            <Card.Body>
                <Card.Title className={"fw-bold"}>{nft.title}</Card.Title>
                <Card.Text className={"rounded p-1"} style={{backgroundColor: "lightgray"}}>
                    <b>Описание:</b><br />
                    {nft.description}
                </Card.Text>
                <Card.Text>
                    ID: {nft.id}
                </Card.Text>
                <Card.Text>
                    Ценность: {nft.price / 10**6} PROFI
                </Card.Text>
                {nft.amount && (
                    <Card.Text>
                        Количество: {nft.amount}
                    </Card.Text>
                )}
                <Card.Text>
                    Выпущено: {nft.issued}
                </Card.Text>
                <Card.Text>
                    Доступно к продаже: {nft.available}
                </Card.Text>
                <Card.Text>
                    Дата создания: {new Date(+nft.creation_date * 1000).toLocaleString()}
                </Card.Text>
                {nft.collection !== "0" && (
                    <Card.Text>
                        ID коллекции: {nft.collection}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
};