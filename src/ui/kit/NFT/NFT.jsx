import React from 'react';
import {Card} from "react-bootstrap";

export const NFT = ({nft, discount=0}) => {
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
                    Цена: {discount ? (
                        <><s>{nft.price / 10**6}</s>{"\t"}{(nft.price - nft.price * discount / 100) / 10**6}</>
                    ) : (
                        nft.price / 10**6
                    )} PROFI
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