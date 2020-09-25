import React, { FunctionComponent } from 'react';

interface TimerInputProps {
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler;
}

const TimerInput: FunctionComponent<TimerInputProps> = ({
  value, placeholder, disabled, onChange
}) => {
  return (
    <div 
      className="timer-input-container"
      data-testid="timer-input-container"
      >
      <input
        value={value}
        className="timer-input"
        disabled={disabled}
        data-testid="timer-input"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

TimerInput.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
}

export default TimerInput;
