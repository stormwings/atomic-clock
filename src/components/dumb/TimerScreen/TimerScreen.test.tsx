import React from 'react';
import { render } from '@testing-library/react'
import TimerScreen from './TimerScreen';

const props = {
  minutes: 0,
  seconds: 4,
  isOn: false
}

describe("<TimerScreen />", () => {
  it("should render a container", () => {
    const { getByTestId } = render(<TimerScreen {...props} />);

    const container = getByTestId("timer-screen-container");

    expect(container).toBeTruthy();
  })

  it("should render a display and correct value", () => {
    const { getByTestId } = render(<TimerScreen {...props} />);

    const container = getByTestId("timer-display");

    expect(container).toBeTruthy();

    const value = `${props.minutes}:${props.seconds < 10 ? `0${props.seconds}` : props.seconds}`
    
    expect(container.innerHTML).toEqual(value);
  })
})
