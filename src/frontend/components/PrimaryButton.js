import React from 'react'
import { findByLabelText } from '@testing-library/react';


const PrimaryButton = (props) => {

    const buttonStyle = {
        backgroundColor: 'rgb(249, 188, 96)',
        color: 'rgb(0, 30, 29)',
        opacity: '1',
        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
        transformStyle: 'preserve - 3d',
        padding: '1.2rem 2rem',
        borderRadius: '3px',
        fontSize: '1.1rem',
        fontWeight: '700',
        cursor: 'pointer'
    }


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
                padding: '20px'
            }}>
            <button onClick={props.event} disabled={props.disabled} style={buttonStyle}>{props.label}</button>
        </div>
    )

}


export default PrimaryButton;