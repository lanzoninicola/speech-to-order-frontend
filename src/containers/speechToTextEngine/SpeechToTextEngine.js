import React, { Component, Fragment } from 'react';
import WatsonSpeech from 'watson-speech'
import './SpeechToTextEngine.css'
import Microphone from '../../components/Microphone';
import Transcript from '../../components/Transcript';
import ResultPizzas from '../../components/ResultPizzas';


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


class SpeechToTextEngine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            streamAudioStatus: 'idle',
            streamAudioObject: {},
            streamAudioData: '',
            streamSentenceDetectionComplete: false
        }
    }

    handleSpeechToMicrophone = async () => {

        try {
            const response = await fetch('https://speech-to-order-backend.eu-gb.mybluemix.net/api/speech-to-text/token')
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
            console.log('speechToTextEngine - handleSpeechToMicrophone: ', error)
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

    render() {

        const { streamAudioStatus, streamAudioData } = this.state;
        const { sitePage } = this.props

        let streamStatusText = ''

        switch (streamAudioStatus) {
            case 'idle':
                streamStatusText = ''
                break;
            case 'ready':
                streamStatusText = 'prova a parlare...'
                break;
            case 'running':
                streamStatusText = 'ti sto ascoltando...'
                break;
            default:
                streamStatusText = 'stream audio completo'
                break;
        }

        let initiateMicrophone = (sitePage === 2) ? true : false

        return (
            < Fragment >
                {initiateMicrophone &&
                    < Microphone
                        clickAction={this.handleSpeechToMicrophone}
                        recordingAudioStatus={streamAudioStatus}
                    />}
                {(streamAudioStatus === 'ready' || streamAudioStatus === 'running') &&
                    < Transcript
                        streamStatusText={streamStatusText}
                        streamAudioStatus={streamAudioStatus}
                        streamAudioData={streamAudioData}
                    />
                }


                <ResultPizzas
                    streamAudioData={streamAudioData}
                />

            </Fragment >
        );
    }
}

export default SpeechToTextEngine;

// <p>After 30 seconds of continuous silence or non-speech activity (no speech) the application terminates automatically the recording session.</p>
// <button onClick={this.handleSpeechToMicrophone}>listen the Microphone</button>
// <button onClick={this.handleStopStreamAudio}>stop Microphone</button>

/*
{(streamSentenceDetectionComplete) ?
                    'sto elaborando...' :
                    <ResultPizzas
                        streamAudioData={streamAudioData}
                    />

                }
*/