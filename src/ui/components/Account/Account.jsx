import React, {useContext, useEffect} from 'react';
import {Button} from "react-bootstrap";
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";
import Web3 from "web3";

export const Account = () => {
    const {wallet, balance, updateBalance, code, discount, updateCode, updateDiscount} = useContext(Context);

    const generateReferalCode = async () => {
        await Service.createReferal(wallet)
            .then(async () => {
                await updateCode();
            });
    }

    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
    }

    useEffect(() => {
        (async () => {
            await updateBalance();
            await updateCode();
            await updateDiscount();
        })();
    }, [wallet]);

    return (
        <WhiteContainer>
            <h1 className={"text-center"}>Личный кабинет</h1>
            <p className={"overflow-hidden"} style={{whiteSpace: "nowrap", textOverflow: "ellipsis"}}>Адрес: {Web3.utils.toChecksumAddress(wallet)}</p>
            <p>Баланс: {balance / 10**6} PROFI</p>

            {code ? (
                <p>Ваш реферальный код: <b>{code}</b> <Button onClick={copyCode} variant={'outline-info'}>Копировать</Button></p>
            ) : (
                <Button onClick={generateReferalCode}>Создать реферальный код</Button>
            )}
            <p className={"m-0"}>Ваша скидка: {discount}%</p>

        </WhiteContainer>
    );
};