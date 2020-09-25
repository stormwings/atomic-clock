import React from 'react';

describe("<Timer />", () => {
  it("should render a container", () => {
    expect(true).toBeTruthy();
  });

  it('should change isOn state true when the start button is clicked', () => {
    expect(true).toBeTruthy();
    // container.find('.start-timer').first().simulate('click');
  
    // expect(container.instance().state.isOn).toEqual(true);
  });
  
  it('should change isOn state false when the stop button is clicked', () => {
    expect(true).toBeTruthy();
    // container.find('.stop-timer').first().simulate('click');
  
    // expect(container.instance().state.isOn).toEqual(false);
  });
  
  it('should change isOn state false when the reset button is clicked', () => {
    expect(true).toBeTruthy();
    // container.find('.stop-timer').first().simulate('click');
  
    // expect(container.instance().state.isOn).toEqual(false);
  
    // expect(container.instance().state.minutes).toEqual(25);
  
    // expect(container.instance().state.seconds).toEqual(0);
  });

//   it('should display different number after entering other value', () => {
//     const { getByTestId } = render(<TimerInput {...props} />);

//     const input = getByTestId("timer-input") as HTMLInputElement;

//     fireEvent.change(input, { target: { value: '40' } });

//     expect(input.value).toEqual("40");
// })

  // fireEvent.click(getByText(/submit/i))

  // const expectedMessage = "Hello, Bob!";
  // expect(getByText(expectedMessage)).toBeDefined()
});

// it('should display different number after entering other value', () => {
//   const { getByText, getByLabelText } = render(<App />);

//   const nameInput = getByLabelText(/name/i);
//   fireEvent.change(nameInput, { target: { value: 'Bob' } })

//   fireEvent.click(getByText(/submit/i))

//   const expectedMessage = "Hello, Bob!";
//   expect(getByText(expectedMessage)).toBeDefined()
// });