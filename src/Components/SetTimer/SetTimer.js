import React, { useState, useEffect } from 'react';
import './SetTimer.css'


const SetTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prevSeconds => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          setIsActive(false);
          alert("Timer is done!");
        }
      }, 1000);
    }

    return () => clearInterval(timer);
    
  }, [isActive, minutes, seconds]);

  const handleStart = () => {
    if (minutes > 0 || seconds > 0) {
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className='set-timer-container'>
      {isActive ?
      <div className='timer'>
        <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</p>
      </div> :

      <div className='user-input'>
            <div>
                <label htmlFor='mins'>Min:</label>
                <input
                className='input'
                type="number"
                value={minutes}
                id='mins'
                onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
                />
            </div>
            <div>
                <label htmlFor='secs'>Sec:</label>
                <input
                className='input'
                type="number"
                id='secs'
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
                />
            </div>
      </div>}
      
      <div>
        <button className='button' onClick={handleStart}>Start</button>
        <button className='button' onClick={handlePause}>Pause</button>
        <button className='button' onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  );
};

export default SetTimer;
