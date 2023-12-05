import React from 'react';
import {Form} from 'react-bootstrap';

export const FormGroup = ({label, controlId, placeholder=`Введите ${label.toLowerCase()}`, type='text', required=true}) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} required={required}/>
        </Form.Group>
    );
};