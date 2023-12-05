import React, {useContext} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Context} from "../../../../core/ContextWrapper";
import {Link} from "react-router-dom";

export const Layout = ({children}) => {
    const {wallet, connect, logout} = useContext(Context);

    return (
        <div className={'h-100 w-100 d-flex flex-column'}>
            <Navbar className={"p-2 d-flex flex-wrap sticky-top"} style={{backgroundColor: "rebeccapurple"}}>
                <Navbar.Brand className={"text-white"}>Профессионалы</Navbar.Brand>
                <Navbar.Collapse className={"d-flex justify-content-end gap-3 flex-wrap"}>
                    {wallet ? (
                        <>
                            <Link to={'/'} className={"btn btn-primary"}>Личный кабинет</Link>
                            <Link to={'/marketplace'} className={"btn btn-primary"}>Торговая площадка</Link>
                            <Button variant={'danger'} onClick={logout}>Выйти</Button>
                        </>
                    ) : (
                        <Button onClick={connect}>Подключиться</Button>
                    )}
                </Navbar.Collapse>
            </Navbar>
            {children}
        </div>
    );
};