// Write your code here
import {Component} from 'react'
import './index.css'
class Stopwatch extends Component{
    state={isTimerRunning:false,timeElapsed:0}

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    onClickReset=()=>{
        clearInterval(this.timerId)
        this.setState({isTimerRunning:false,timeElapsed:0})
    }

    onClickStop=()=>{
        clearInterval(this.timerId)
        this.setState({isTimerRunning:false})
    }

    timerOnRun=()=>{
        this.setState(prevState=>({timeElapsed:prevState.timeElapsed+1}))
    }

    onClickStart=()=>{
        this.timerId=setInterval(this.timerOnRun,1000)
        this.setState({isTimerRunning:true})
    }

    getTime=()=>{
        const {timeElapsed}=this.state
        const timeInSeconds=Math.floor(timeElapsed)%60
        const timeInMinutes=Math.floor(timeElapsed/60)
        const timeElapsedInSeconds= timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`
        const timeElapsedInMinutes=timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`
        const totalTime=`${timeElapsedInMinutes}:${timeElapsedInSeconds}`
        return totalTime
    }
    render(){
        const {isTimerRunning}=this.state
        const timer=this.getTime()
        return(
            <div className="bg-container">
            <h1 className="heading">Stopwatch</h1>
            <div className="timer-container">
            <div className="header">
            <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" className="stopwatch-img" alt="stopwatch"/>
            <p className="timer-desc">Timer</p>
            </div>
            <h1 className="timer">{timer}</h1>
            <div className="footer">
            <button className="start-btn" type="button" onClick={this.onClickStart} disabled={isTimerRunning}>Start</button>
            <button className="stop-btn" type="button" onClick={this.onClickStop}>Stop</button>
            <button className="reset-btn" type="button" onClick={this.onClickReset}>Reset</button>
            </div>
            </div>
            </div>
        )
    }
}
export default Stopwatch
