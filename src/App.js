import './App.css';
import Clock from './Components/Clock/Clock';
import StopWatch from './Components/StopWatch/StopWatch';
import SetTimer from './Components/SetTimer/SetTimer';
import { useState } from 'react';


function App() {
  const [tab, setTab] = useState("clock")
  return (
    <div className='bg-container'>
        <div className='card-container'>
              <div className='tabs'>
                    <h4 onClick={()=>setTab('clock')} className={`tab ${tab == 'clock' ? 'active':''}`}
                        >Clock</h4>
                    <h4 onClick={()=>setTab('stopWatch')} className={`tab ${tab == 'stopWatch' ? 'active':''}`}
                        >Stop Watch</h4>
                    <h4 onClick={()=>setTab('setTimer')} className={`tab ${tab == 'setTimer' ? 'active':''}`}
                         >Set Timer</h4>
                    
              </div>
              <div className='content'>
                {tab==='clock' ? <Clock/> : null}
                {tab==='stopWatch' ? <StopWatch/> : null}
                {tab==='setTimer' ? <SetTimer/> : null}
                

              </div>
        </div>
      
    </div>
  );
}

export default App;
