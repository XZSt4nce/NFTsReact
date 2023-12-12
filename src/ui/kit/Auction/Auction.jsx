import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Form, ListGroup, ListGroupItem} from "react-bootstrap";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";
import {Collection} from "../Collection/Collection";
import Web3 from "web3";
import {FormProfi} from "../FormInputs/FormProfi/FormProfi";
import {EmptyListPlug} from "../../components/EmptyListPlug/EmptyListPlug";

export const Auction = ({auction, index}) => {
    const {wallet, owner, updateAuctions, time, updateTime} = useContext(Context);
    const [bets, setBets] = useState([]);
    const [myBet, setMyBet] = useState({});

    const updateBets = async () => {
        await Service.getBets(index)
            .then(async (data) => {
                if (data) {
                    let sortedBets = [...data];
                    sortedBets.sort((a, b) => +b.sum - +a.sum);
                    setBets(sortedBets);
                    await Service.getMyBet(wallet, index)
                        .then((bet) => {
                            if (bet) {
                                setMyBet(bet);
                            }
                        });
                }
            });
    }

    const checkExpired = async () => {
        await Service.checkAuctionExpired(wallet, index)
            .then(async (data) => {
                if (data) {
                    await updateAuctions();
                }
            });
    }

    const finish = async () => {
        await Service.finishAuction(wallet, index)
            .then(async (data) => {
                if (data) {
                    await updateAuctions();
                }
            });
    }

    const bid = async (ev) => {
        ev.preventDefault();
        const bet = ev.target[0].value * 10**6;
        await Service.bid(wallet, index, bet)
            .then(async (data) => {
                if (data) {
                    await updateAuctions();
                    await updateBets();
                }
            });
    }

    useEffect(() => {
        if (time >= +auction.timeStart && time - 1 < +auction.timeStart) {
            (async () => {
                await updateTime();
            })();
        } else if (time > +auction.timeEnd && time - 1 < +auction.timeEnd) {
            (async () => {
                await updateTime();
            })();
        }
    }, [time]);

    useEffect(() => {
        (async () => {
            await updateBets();
        })();
    }, []);

    return (
        <Card>
            <Card.Body>
                <Collection collection={auction.collection} />
                <Card.Text>
                    Время начала: {new Date(+auction.timeStart * 1000).toLocaleString()}
                </Card.Text>
                <Card.Text>
                    Время конца: {new Date(+auction.timeEnd * 1000).toLocaleString()}
                </Card.Text>
                <Card.Text>
                    Стартовая цена: {+auction.startPrice / 10**6}
                </Card.Text>
                <Card.Text>
                    Максимальная цена: {+auction.maxPrice / 10**6}
                </Card.Text>
                <div className={"mb-3"}>
                    <h2>Лидеры</h2>
                    {bets.length > 0 ? (
                        <ListGroup>
                            <ListGroupItem>
                                1. {bets[0].wallet}: {bets[0].sum / 10**6} PROFI
                            </ListGroupItem>
                            {bets.length > 1 && (
                                <ListGroupItem>
                                    2. {bets[1].wallet}: {bets[1].sum / 10**6} PROFI
                                </ListGroupItem>
                            )}
                            {bets.length > 2 && (
                                <ListGroupItem>
                                    3. {bets[2].wallet}: {bets[2].sum / 10**6} PROFI
                                </ListGroupItem>
                            )}
                        </ListGroup>
                    ) : <EmptyListPlug />}
                </div>
                {(+auction.timeStart <= time && time < +auction.timeEnd) ? (
                    <>
                        {Web3.utils.toChecksumAddress(wallet) === owner ? (
                            <Button className={"w-100"} variant={"danger"} onClick={finish}>Закончить аукцион</Button>
                        ) : (!!myBet.sum || myBet.sum === "0") && (
                            <>
                                <p><b>Моя ставка:</b> {myBet.sum / 10**6} PROFI</p>
                                <Form onSubmit={bid}>
                                    <h2 className={"text-center"}>Сделать ставку</h2>
                                    <FormProfi
                                        min={(+auction.lastBet.sum - +myBet.sum + 1) / 10**6}
                                        max={(+auction.maxPrice - +myBet.sum) / 10**6}
                                        controlId={"form-bet"}
                                        label={"Ставка"}
                                        placeholder={"Cколько добавить к Вашей ставке"}
                                    />
                                    <Button type={"submit"}>Поставить</Button>
                                </Form>
                            </>
                        )}
                    </>
                ) : time > +auction.timeEnd && auction.isActive && (
                    <Button className={"w-100"} variant={"success"} onClick={checkExpired}>Отправить вознаграждение</Button>
                )}
            </Card.Body>
        </Card>
    );
};