import React, { Component } from 'react';
import SpeechToText from '../speechToText/SpeechToText';



class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className=""></header>
        <SpeechToText />
      </div>
    );
  }
}

export default App;
