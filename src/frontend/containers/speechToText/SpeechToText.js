import React, { Component, Fragment } from 'react';
import WatsonSpeech from 'watson-speech'
import './SpeechToText.css'
import Microphone from '../../components/Microphone';


/*
it-IT_BroadbandModel
it-IT_NarrowbandModel
pt-BR_BroadbandModel
pt-BR_NarrowbandModel
en-GB_BroadbandModel
en-GB_NarrowbandModel
en-US_BroadbandModel
en-US_NarrowbandModel
 */

//https://cloud.ibm.com/apidocs/speech-to-text?code=node#introduction
//https://cloud.ibm.com/docs/speech-to-text


class SpeechToText extends Component {
    constructor() {
        super()
        this.state = {
            streamAudioStatus: 'idle',
            streamAudioObject: {},
            streamAudioData: '',
            streamSentenceDetectionComplete: false
        }
    }

    componentDidMount() {

    }

    handleSpeechToMicrophone = async () => {

        try {
            const response = await fetch('https://localhost:3001/api/speech-to-text/token')
            const token = await response.json()

            let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
                accessToken: token.accessToken,
                url: 'https://api.eu-de.speech-to-text.watson.cloud.ibm.com/instances/d86be21b-c272-4038-955f-68908b2ee32d',
                keepMicrophone: true,
                objectMode: true,
                extractResults: true,
                format: false,
                //model: 'pt-BR_BroadbandModel'
                model: 'it-IT_BroadbandModel'
            });

            this.setState({
                streamAudioStatus: 'ready',
                streamAudioObject: stream
            })

            this.handleStartStreamAudio()
        } catch (error) {
            console.log(error)
        }
    }

    handleStartStreamAudio = () => {
        this.state.streamAudioObject.on('data', (data) => {
            console.log(data.alternatives[0].transcript);
            console.log(data.final);
            this.setState({
                streamAudioStatus: 'running',
                streamAudioData: data.alternatives[0].transcript,
                streamSentenceDetectionComplete: data.final
            })
        });

    }

    handleStopStreamAudio = () => {
        this.state.streamAudioObject.stop()
        this.setState({
            streamAudioStatus: 'stopped'
        })
    }

    handleSetStreamAudioText = () => {

        let text = ''

        switch (this.state.streamAudioStatus) {
            case 'idle':
                text = ''
                break;
            case 'ready':
                text = 'prova a parlare...'
                break;
            case 'running':
                text = 'ti sto ascoltando...'
                break;
            case 'in progress':
                text = 'ti sto ascoltando...'
                break;
            default:
                text = 'stream audio completo'
                break;
        }

        return text
    }

    render() {

        const { streamAudioStatus, streamAudioData } = this.state;

        let streamText = ''

        switch (this.state.streamAudioStatus) {
            case 'idle':
                streamText = ''
                break;
            case 'ready':
                streamText = 'prova a parlare...'
                break;
            case 'running':
                streamText = 'ti sto ascoltando...'
                break;
            case 'in progress':
                streamText = 'ti sto ascoltando...'
                break;
            default:
                streamText = 'stream audio completo'
                break;
        }


        return (
            <Fragment>
                <Microphone clickAction={this.handleSpeechToMicrophone} recordingAudioStatus={streamAudioStatus} />
                <div className="container-streaming">
                    <p className="streamAudioTextDetection"><span style={{ backgroundColor: '#f9bc60' }}>{streamText}</span></p>
                    <p className="streamAudiGIoText">{(streamAudioStatus === 'running') && streamAudioData}</p>
                </div>
            </Fragment>
        );
    }
}

export default SpeechToText;

// <p>After 30 seconds of continuous silence or non-speech activity (no speech) the application terminates automatically the recording session.</p>
// <button onClick={this.handleSpeechToMicrophone}>listen the Microphone</button>
// <button onClick={this.handleStopStreamAudio}>stop Microphone</button>