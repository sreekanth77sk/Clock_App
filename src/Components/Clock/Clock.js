import { useEffect, useState } from "react"
import './Clock.css'


function Clock(){
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
       const intervalId =  setInterval(()=>{
        setTime(new Date())
       },1000)
       return()=> clearInterval(intervalId)
    },[])
    const currentTime = time.toLocaleTimeString()
    return(
        <div className="clock-container">
            <p className="clock">{currentTime}</p>
        </div>
    )
}
export default Clock

