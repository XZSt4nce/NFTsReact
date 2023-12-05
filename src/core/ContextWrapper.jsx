import React, {createContext, useState} from 'react';
import Service from "../services/Service";

export const Context = createContext({});

const ContextWrapper = ({children}) => {
    const [wallet, setWallet] = useState("");
    const [balance, setBalance] = useState(0);
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const updateDiscount = async () => {
        await Service.getMyDiscount(wallet)
            .then((myDiscount) => setDiscount(+myDiscount));
    }

    const updateCode = async () => {
        await Service.getMyCode(wallet).then(setCode);
    }

    const connect = async () => {
        await window.ethereum.request({method: "eth_requestAccounts"})
            .then((accounts) => {
                setWallet(accounts[0]);
            });
    }

    const updateBalance = async () => {
        await Service.getBalance(wallet)
            .then((myBalance) => setBalance(+myBalance));
    }

    const logout = () => {
        setWallet("");
    }

    const values = {
        wallet,
        balance,
        code,
        discount,
        connect,
        logout,
        updateBalance,
        updateDiscount,
        updateCode
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
};

export default ContextWrapper;