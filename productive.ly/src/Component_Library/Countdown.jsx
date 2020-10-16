import React, { Component } from 'react'

// this was sources from: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

export default class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  }

  startTimer = () => {
    this.setState({ // this sets the defualt beginning settings
      timerOn: true,
      timerStart: this.state.timerTime,
      timerTime: this.state.timerTime
    })
    this.timer = setInterval(() => {  // this makes it count down when user adds a new time greater than 0
      const newTime = this.state.timerTime - 10
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        })
      } else { // when the countdown reaches zero, it alerts countdown ended
        clearInterval(this.timer)
        this.setState({ timerOn: false })
        alert("Countdown ended")
      }
    }, 10)
  }

  // this handles the stop timer button function by changing the timerOn to false
  stopTimer = () => {  
    clearInterval(this.timer)
    this.setState({timerOn: false})
  }

  // this handles the reset button by putting it back to its original setState
  resetTimer = () => { 
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      })
    }
  }

  // this puts limits on the amnount of time a user can input as well as defines what increment and decrement buttons do
  adjustTimer = input => {
    const { timerTime, timerOn } = this.state
    const max = 216000000
    if (!timerOn) {
      if (input === 'incHours' && timerTime + 3600000 < max) {
        this.setState({timerTime: timerTime + 3600000})
      } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 })
      } else if (input === 'incMinutes' && timerTime + 60000 < max) {
        this.setState({timerTime: timerTime + 60000})
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        this.setState({timerTime: timerTime - 60000})
      } else if (input === 'incSeconds' && timerTime + 1000 < max) {
        this.setState({timerTime: timerTime + 1000})
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        this.setState({timerTime: timerTime - 1000})
      }
    }
  }

  // the let variables turn numbers into base 60 so that they are legible as time and not just integers counting down
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2)
    let minutes = ('0' + (Math.floor((timerTime / 60000) % 60))).slice(-2)
    let hours = ('0' + (Math.floor((timerTime / 3600000) % 60))).slice(-2)

    // this is all the actual display
    return (
      <div className='countdown-container'>
        <div className='countdown-header'>
          <div className='countdown-label'>Hours : Minutes : Seconds</div>
          <div className='countdown-display'>
            <button onClick={() => this.adjustTimer('incHours')}>&#8679;</button>
            <button onClick={() => this.adjustTimer('incMinutes')}>&#8679;</button>
            <button onClick={() => this.adjustTimer('incSeconds')}>&#8679;</button>
            <div className='countdown-time'>{hours} : {minutes} : {seconds}</div>
            <button onClick={() => this.adjustTimer('decHours')}>&#8681;</button>
            <button onClick={() => this.adjustTimer('decMinutes')}>&#8681;</button>
            <button onClick={() => this.adjustTimer('decSeconds')}>&#8681;</button>
          </div>
          {/* These ternaries toggle the different states of the timer */}
          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (<button onClick={this.startTimer}>Start</button>)}
          {timerOn === true && (timerStart >= 1000 && (<button onClick={this.stopTimer}>Stop</button>))}
          {timerOn === false && (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (<button onClick={this.startTimer}>Resume</button>)}
          {(timerOn === false || timerTime < 1000) && (timerStart !== timerTime && timerStart > 0) && (<button onClick={this.resetTimer}>Reset</button>)}
        </div>
      </div>
    )
  }
}
