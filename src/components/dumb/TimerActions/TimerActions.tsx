import React, { FunctionComponent } from 'react';

interface TimerActionsProps {
  startTimer: Function;
  stopTimer: Function;
  resetTimer: Function;
}

const TimerActions: FunctionComponent<TimerActionsProps> = ({
  startTimer, stopTimer, resetTimer
}) => (
  <div
    className="timer-actions-container"
    data-testid="timer-actions-container"
  >
    <button
      className="button start-timer"
      data-testid="timer-actions-button"
      onClick={() => startTimer()}
    >
      Start
    </button>
    <button
      className="button stop-timer"
      data-testid="timer-actions-button"
      onClick={() => stopTimer()}
    >
      Stop
    </button>
    <button
      className="button reset-timer"
      data-testid="timer-actions-button"
      onClick={() => resetTimer()}
    >
      Reset
    </button>
  </div>
);

export default TimerActions;
