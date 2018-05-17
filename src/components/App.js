import '../assets/css/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: 0,
      fps: 0,
      seconds: 0,
      minutes: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Frames Per Second
          <input
            name="fps"
            type="number"
            checked={this.state.fps}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Frames
          <input
            name="frames"
            type="number"
            checked={this.state.frames}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Duration:
          <input
            name="minutes"
            type="number"
            value={this.state.minutes}
            onChange={this.handleInputChange} />
          <input
          name="seconds"
          type="number"
          value={this.state.seconds}
          onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default App;
