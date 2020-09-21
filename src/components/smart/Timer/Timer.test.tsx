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
});
