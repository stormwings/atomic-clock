import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import TimerActions from './TimerActions';

const props = {
  startTimer: jest.fn(),
  stopTimer: jest.fn(),
  resetTimer: jest.fn()
}

describe("<TimerActions />", () => {
  beforeEach(() => {
    props.startTimer.mockClear();
    props.stopTimer.mockClear();
    props.resetTimer.mockClear();
  });

  it("should render a container", () => {
    const { getByTestId } = render(<TimerActions {...props} />);

    const container = getByTestId("timer-actions-container");

    expect(container).toBeTruthy();
  })

  it("should render 3 buttons", () => {
    const { getByTestId } = render(<TimerActions {...props} />);

    const container = getByTestId("timer-actions-container");

    expect(container.children.length).toBe(3);
  })

  it('invokes startTimer when the start button is clicked', () => {
    const { getByText } = render(<TimerActions {...props} />);

    const startButton = getByText('Start');

    expect(props.startTimer).toHaveBeenCalledTimes(0);
    
    fireEvent.click(startButton);
    
    expect(props.startTimer).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', () => {
    const { getByText } = render(<TimerActions {...props} />);

    const stopButton = getByText('Stop');

    expect(props.stopTimer).toHaveBeenCalledTimes(0);

    fireEvent.click(stopButton);

    expect(props.stopTimer).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const { getByText } = render(<TimerActions {...props} />);

    const resetButton = getByText('Reset');

    expect(props.resetTimer).toHaveBeenCalledTimes(0);

    fireEvent.click(resetButton);

    expect(props.resetTimer).toHaveBeenCalledTimes(1);
  });
})
