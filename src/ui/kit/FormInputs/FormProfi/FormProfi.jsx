import React from 'react';
import {FormGroup} from "../FormGroup/FormGroup";

export const FormProfi = ({controlId, label, max, placeholder=`Введите ${label.toLowerCase()}`, min=0}) => {
    return (
        <FormGroup controlId={controlId} label={label} placeholder={placeholder} type={"number"} min={min} max={max} step={".000001"} />
    );
};