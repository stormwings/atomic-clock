import React, { FunctionComponent } from 'react';

interface TimerScreenProps {
  minutes: number;
  seconds: number;
  isOn: boolean;
}

const TimerScreen: FunctionComponent<TimerScreenProps> = ({
  minutes, seconds, isOn
}) => {
  return (
    <div 
      className="timer-screen-container"
      data-testid="timer-screen-container"
      >
      <div
        className={`timer-display ${isOn ? '--active' : '--inactive'}`}
        data-testid="timer-display"
      >
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}

export default TimerScreen;
