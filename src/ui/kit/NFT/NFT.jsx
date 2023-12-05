import React from 'react';
import {Card} from "react-bootstrap";

export const NFT = ({nft, discount}) => {
    return (
        <Card style={{width: "300px"}}>
            <Card.Header>ID: {nft.id}</Card.Header>
            <Card.Img variant="top" src={`assets/${nft.image}`} />
            <Card.Body>
                <Card.Title>{nft.title}</Card.Title>
                <Card.Text>
                    {nft.description}
                </Card.Text>
                <Card.Text>
                    Цена: {discount ? (
                        <span><s>{nft.price / 10**6}</s>{"\t"}{(nft.price - nft.price * discount / 100) / 10**6}</span>
                    ) : (
                        <span>{nft.price / 10**6}</span>
                    )} PROFI
                </Card.Text>
                <Card.Text>
                    Количество: {nft.issued}
                </Card.Text>
                <Card.Text>
                    {Date(nft.creation_date)}
                </Card.Text>
                {nft.collection !== 0 && (
                    <Card.Text>
                        ID коллекции: {nft.collection}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
};