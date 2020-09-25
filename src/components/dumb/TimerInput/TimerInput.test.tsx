import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import TimerInput from './TimerInput';

const props = {
  value: 2,
  placeholder: 'time',
  disabled: false,
  onChange: jest.fn()
}

describe("<TimerInput />", () => {
  it("should render a container", () => {
    const { getByTestId } = render(<TimerInput {...props} />);

    const container = getByTestId("timer-input-container");

    expect(container).toBeTruthy();
  })

  it("should render a display and correct value", () => {
    const { getByTestId } = render(<TimerInput {...props} />);

    const input = getByTestId("timer-input") as HTMLInputElement;

    expect(input).toBeTruthy();
    
    expect(input.value).toEqual(props.value.toString());
  })
})

it('should execute on change handler', () => {
    const { getByTestId } = render(<TimerInput {...props} />);

    const input = getByTestId("timer-input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: '40' } });

    expect(props.onChange).toHaveBeenCalled();
})

it('should display placeholder correctly', () => {
    const { getByTestId } = render(<TimerInput {...props} />);

    const input = getByTestId("timer-input") as HTMLInputElement;

    expect(input).toBeTruthy();
    
    expect(input.placeholder).toEqual(props.placeholder);
})

it('should disable input', () => {
    const { getByTestId, rerender } = render(<TimerInput {...props} />);

    const input = getByTestId("timer-input") as HTMLInputElement;

    expect(input.disabled).toBeFalsy();

    rerender(
      <TimerInput
        {...props}
        disabled
      />
    )

    expect(input.disabled).toBeTruthy();
})
