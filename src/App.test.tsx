import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("should render a container", () => {
    const { getByTestId } = render(<App />);

    const container = getByTestId("app-container");

    expect(container).toBeTruthy();
  })

  it("should render Timer children", () => {
    const { getByTestId } = render(<App />);

    const container = getByTestId("app-container");

    expect(container.children.length).toEqual(1);
  })
})
