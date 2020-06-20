import React, { Component } from 'react';
import SpeechToText from '../speechToText/SpeechToText';
import PrimaryButton from '../../components/PrimaryButton'
import './App.css';
import TextH2 from '../../components/TextH2';
import BodyContent from '../../components/BodyContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showSpeechToText: false,
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

  handleStartProcess = () => {
    this.setState({
      showSpeechToText: true,
      page: 2
    })

    console.log(this.state.showSpeechToText)
  }


  render() {
    return (
      <div className="App">
        <header className="Header">header section</header>
        <section className="Section">
          <TextH2>{this.handlePageTitle(this.state.page)}</TextH2>
          <BodyContent page={this.state.page} />
          {this.state.showSpeechToText && <SpeechToText />}
          <PrimaryButton event={this.handleStartProcess} label={this.handleButtonText(this.state.page)} disabled={false} />
        </section>
      </div >
    );
  }
}

export default App;
