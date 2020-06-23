import React from 'react'
import { ReactComponent as MicrophoneLogo } from '../asset/svg/microphone.svg';
import './Microphone.css'

const Microphone = (props) => {

    const { clickAction, recordingAudioStatus } = props

    let recordingIsRunning = false;
    let microphoneIconOpacity = {};

    (recordingAudioStatus === 'ready') || (recordingAudioStatus === 'running') ? recordingIsRunning = true : recordingIsRunning = false;

    (!recordingIsRunning) ? microphoneIconOpacity = { opacity: '0.6' } : microphoneIconOpacity = { opacity: '1' }

    return (
        <div className="container direction-column">
            <div id="microphone-logo-container" style={microphoneIconOpacity}>
                <MicrophoneLogo id="microphone-logo" onClick={clickAction} style={microphoneIconOpacity} />
            </div>
            {recordingIsRunning &&
                <div className="container direction-row recording-state">
                    <svg height="50" width="50" className="blinking">
                        <circle cx="25" cy="25" r="10" fill="#e16162" />
                    </svg>
                    <p>microfono attivo</p>
                </div>
            }
        </div>
    )
}


export default Microphone