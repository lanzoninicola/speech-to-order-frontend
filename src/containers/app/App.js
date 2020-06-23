import React, { Component } from 'react';
import SpeechToTextEngine from '../speechToTextEngine/SpeechToTextEngine';
import PrimaryButton from '../../components/PrimaryButton'
import './App.css';
import TextH2 from '../../components/TextH2';
import BodyContent from '../../components/BodyContent'


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
        return 'Proviamo...'
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
        <header className="Header"></header>
        <section className="Section">
          <TextH2>{this.handlePageTitle(page)}</TextH2>
          <BodyContent page={page} />
          <SpeechToTextEngine
            streamAudioStatus={streamAudioStatus}
            sitePage={page} />
          <div className="container-buttons">
            <PrimaryButton
              event={() => this.handleButtonAction({ action: 'goBack' })}
              label={"Indietro"}
              disabled={(page !== 1 ? false : true)} />
            <PrimaryButton
              event={() => this.handleButtonAction({ action: 'goForward' })}
              label={"Avanti"}
              disabled={(page !== 3 ? false : true)} />

          </div>
        </section>
      </div >
    );
  }
}

export default App;
