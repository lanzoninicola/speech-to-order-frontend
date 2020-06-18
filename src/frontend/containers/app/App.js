import React, { Component } from 'react';
//import SpeechToText from '../speechToText/SpeechToText';
import WatsonSpeech from 'watson-speech'

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


class App extends Component {
  constructor() {
    super()
    this.state = {
      streamAudio: {},
      streamAudioData: ''
    }
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
        model: 'it-IT_BroadbandModel'
      });

      this.setState({ streamAudio: stream })

      this.handleStartStreamAudio()
    } catch (error) {
      console.log(error)
    }
  }

  handleStartStreamAudio = () => {
    this.state.streamAudio.on('data', (data) => {
      console.log(data.alternatives[0].transcript);
      console.log(data);
      this.setState({ streamAudioData: data })
    });

  }

  handleStopStreamAudio = () => {
    this.state.streamAudio.stop()
  }

  render() {
    return (
      <div className="App">
        <header className=""></header>
        <button onClick={this.handleSpeechToMicrophone}>listen the Microphone</button>
        <div></div>
        <button onClick={this.handleStopStreamAudio}>stop Microphone</button>
      </div>
    );
  }
}

export default App;
