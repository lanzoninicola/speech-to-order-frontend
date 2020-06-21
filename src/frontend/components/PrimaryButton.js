import React from 'react'
import { findByLabelText } from '@testing-library/react';
import './PrimaryButton.css'

const PrimaryButton = (props) => {

    const { event, action, disabled } = props


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
                padding: '20px'
            }}>
            <button id="buttonPrimary" onClick={props.event} disabled={props.disabled}>{props.label}</button>
        </div>
    )

}


export default PrimaryButton;