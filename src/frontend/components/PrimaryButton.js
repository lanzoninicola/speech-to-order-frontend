import React, { Fragment } from 'react'
import './PrimaryButton.css'

const PrimaryButton = (props) => {

    const { event, disabled, label } = props

    console.log(disabled);

    return (
        <Fragment>
            <button id="buttonPrimary" onClick={event} disabled={disabled}>{label}</button>
        </Fragment>
    )

}


export default PrimaryButton;