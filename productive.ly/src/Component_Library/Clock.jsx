import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// sourced from React Documentation: https://reactjs.org/docs/state-and-lifecycle.html

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='clock'>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

export default Clock