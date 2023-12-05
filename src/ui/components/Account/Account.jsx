import React, {useContext, useEffect} from 'react';
import {Button} from "react-bootstrap";
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import Service from "../../../services/Service";
import {Context} from "../../../core/ContextWrapper";

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
    }, []);

    return (
        <WhiteContainer className={""} style={{maxWidth: "450px"}}>
            <h1 className={"text-center"}>Личный кабинет</h1>
            <p className={"overflow-hidden"} style={{whiteSpace: "nowrap", textOverflow: "ellipsis"}}>Адрес: {wallet}</p>
            <p>Баланс: {balance / 10**6} PROFI</p>

            {code ? (
                <p>Ваш реферальный код: {code} <Button onClick={copyCode} variant={'outline-info'}>Копировать</Button></p>
            ) : (
                <Button onClick={generateReferalCode}>Создать реферальный код</Button>
            )}
            <p className={"m-0"}>Ваша скидка: {discount}%</p>

        </WhiteContainer>
    );
};