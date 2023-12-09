import React, {createContext, useState} from 'react';
import Service from "../services/Service";

export const Context = createContext({});

const ContextWrapper = ({children}) => {
    const owner = "0x4ff9564519d5debc20c65cb23f53c9decece417e";
    const [wallet, setWallet] = useState("");
    const [balance, setBalance] = useState(0);
    const [code, setCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [assets, setAssets] = useState([]);
    const [collections, setCollections] = useState([]);
    const [sells, setSells] = useState([]);

    const updateSells = async () => {
        await Service.getSells()
            .then((data) => {
                if (data) {
                    setSells(data);
                }
            });
    }

    const updateOwnerCollections = async () => {
        await Service.getOwnerCollections(wallet)
            .then((data) => {
                if (data) {
                    setCollections(data);
                }
            });
    }

    const updateAssets = async () => {
        await Service.getMyNFTs(wallet).then((data) => {
            if (data) {
                setAssets(data[0].map((asset, idx) => {
                        if (+asset.id) {
                            return {...asset, amount: +data[1][idx]};
                        }
                    }).filter((el) => !!el)
                );
            }
        });
    }

    const updateDiscount = async () => {
        await Service.getMyDiscount(wallet)
            .then((myDiscount) => {
                if (myDiscount) {
                    setDiscount(+myDiscount);
                }
            });
    }

    const updateCode = async () => {
        await Service.getMyCode(wallet).then((myCode) => {
            if (myCode) {
                setCode(myCode);
            }
        });
    }

    const updateBalance = async () => {
        await Service.getBalance(wallet)
            .then((myBalance) => {
                if (myBalance) {
                    setBalance(+myBalance);
                }
            });
    }

    const connect = async () => {
        await window.ethereum.request({method: "eth_requestAccounts"})
            .then((accounts) => {
                setWallet(accounts[0]);
            })
            .catch((err) => {
                if (err.code === 4001) {
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(err);
                }
            });
    }

    const logout = () => {
        setWallet("");
        setBalance(0);
        setCode("");
        setDiscount(0);
        setAssets([]);
        setCollections([]);
    }

    const values = {
        owner,
        wallet,
        balance,
        code,
        discount,
        assets,
        collections,
        sells,
        updateSells,
        updateOwnerCollections,
        updateAssets,
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