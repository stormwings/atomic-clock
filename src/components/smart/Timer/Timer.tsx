import React, { useState, useEffect } from 'react';

import TimerScreen from './../../dumb/TimerScreen/TimerScreen';
import TimerActions from './../../dumb/TimerActions/TimerActions';
import TimerInput from '../../dumb/TimerInput/TimerInput';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [isOn, setIsOn] = useState(false);
  const [inputValue, setInputValue] = useState<number>(0);

  const onChange: React.ChangeEventHandler = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    ev.preventDefault();
    const inputtedValue = parseFloat(ev.currentTarget.value);

    inputtedValue 
      ? setInputValue(inputtedValue)
      : setInputValue(0)
  }

  const startTimer = () => setIsOn(true);

  const stopTimer = () => setIsOn(false);

  const resetTimer = () => {
    stopTimer();
    setMinutes(0);
    setSeconds(2);
    setIsOn(false);
  };

  useEffect(() => {
    let myInterval: NodeJS.Timer;

    myInterval = setInterval(() => {
      if (isOn) {
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      } else {
        clearInterval(myInterval);
        stopTimer()
      }
    }, 1000);

    return () => clearInterval(myInterval);
  }, [isOn, minutes, seconds]);

  return (
    <div
      className="timer-container"
      data-testid="timer-container"
    >
      <TimerInput
        value={inputValue}
        onChange={onChange}
        placeholder="put your route time in seconds"
      />
      <TimerScreen
        minutes={minutes}
        seconds={seconds}
        isOn={isOn}
      />
      <TimerActions
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
    </div>
  )
};

export default Timer;
