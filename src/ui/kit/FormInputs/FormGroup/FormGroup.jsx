import React from 'react';
import {Form} from 'react-bootstrap';

export const FormGroup = ({label, controlId, max, accept, step="1", min=0, placeholder=`Введите ${label.toLowerCase()}`, type='text', required=true}) => {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} accept={accept} min={min} max={max} placeholder={placeholder} step={step} required={required}/>
        </Form.Group>
    );
};