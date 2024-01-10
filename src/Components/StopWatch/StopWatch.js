import { useState, useEffect } from "react"
import './StopWatch.css'

function StopWatch(){
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=>{
        let intervalId;
        if(running){
            intervalId = setInterval(()=>{
                setTime(prev => prev + 1)
            },1000)
        }
        return ()=> clearInterval(intervalId)
    },[running])

    const handleStartOrStop = ()=>{
        setRunning(prev => !prev)
    }
    const reset = ()=>{
        setRunning(false)
        setTime(0)
    }

    const displayTime = timeInSeconds=>{
        const mins = Math.floor(timeInSeconds / 60)
        const secs = timeInSeconds % 60

        return `${String(mins).padStart(2,'0')} : ${String(secs).padStart(2,'0')}`
    }

    return(
        <div className="stop-watch-container">
            <div className="stop-watch">
                <p>{displayTime(time)}</p>
            </div>

            <div>
                <button className="button" onClick={handleStartOrStop}>{running ? 'Stop' : 'Start'}</button>
                <button className="button" onClick={reset}>Reset</button>
                </div>
        </div>
    )
}
export default StopWatch