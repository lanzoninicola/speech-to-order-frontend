import React, { Component } from 'react';
import SpeechToTextEngine from '../speechToTextEngine/SpeechToTextEngine';
import PrimaryButton from '../../components/PrimaryButton'
import './App.css';
import TextH2 from '../../components/TextH2';
import BodyContent from '../../components/BodyContent'
import { act } from 'react-dom/test-utils';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  handlePageTitle = (sitePage) => {
    switch (sitePage) {
      case 1:
        return 'Benvenuto!'
      case 2:
        return ''
      case 3:
        return 'Cosa ti piace?'
      default:
        return ''
    }
  }


  handleButtonText = (sitePage) => {

    switch (sitePage) {
      case 1:
        return 'Iniziamo!'
      case 2:
        return 'Avanti'
      case 3:
        return ''
      default:
        return ''
    }
  }

  handleButtonAction = (actionType) => {

    if (actionType.action === 'goForward') {
      this.setState({
        page: this.state.page + 1
      })
    }

    if (actionType.action === 'goBack') {
      this.setState({
        page: this.state.page - 1
      })
    }
  }


  render() {

    const { streamAudioStatus, page } = this.state;



    return (
      <div className="App">
        <header className="Header">header section</header>
        <section className="Section">
          <TextH2>{this.handlePageTitle(this.state.page)}</TextH2>
          <BodyContent page={this.state.page} />
          <SpeechToTextEngine
            streamAudioStatus={streamAudioStatus}
            sitePage={this.state.page} />
          <PrimaryButton
            event={() => this.handleButtonAction({ action: 'goForward' })}
            label={"Avanti"}
            disabled={false} />
          <PrimaryButton
            event={() => this.handleButtonAction({ action: 'goBack' })}
            label={"Indietro"}
            disabled={false} />
        </section>
      </div >
    );
  }
}

export default App;
