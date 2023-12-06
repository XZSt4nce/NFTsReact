import React from 'react';
import {Form} from "react-bootstrap";

export const FormTimeGroup = ({label, text, controlId}) => {
    const borderStyle = "1px solid #dee2e6";
    return (
        <Form.Group className={"mb-3"} controlId={controlId}>
            <Form.Label>{label}</Form.Label><br />
            <div className={"d-flex align-items-center rounded p-1"} style={{border: borderStyle}}>
                <p className={"m-0 text-nowrap"}>{text}</p>
                <Form.Control className={"rounded-0"} style={{border: "none", borderLeft: borderStyle, borderRight: borderStyle}} type={"number"} min={0} required />
                <Form.Select className={"rounded-0 border-0"} style={{width: "7rem", border: "none"}}>
                    <option value={1}>сек.</option>
                    <option value={60}>мин.</option>
                    <option value={3600}>часов</option>
                </Form.Select>
            </div>
        </Form.Group>
    );
};