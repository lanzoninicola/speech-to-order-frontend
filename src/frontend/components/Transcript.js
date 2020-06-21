import React from 'react'


const Transcript = (props) => {

    const { streamStatusText, streamAudioStatus, streamAudioData } = props;

    return (
        <div className="container-streaming">
            <p className="streamAudioTextDetection"><span style={{ backgroundColor: '#f9bc60' }}>{streamStatusText}</span></p>
            <p className="streamAudioText">{(streamAudioStatus === 'running') && streamAudioData}</p>
        </div>
    )
}

export default Transcript;