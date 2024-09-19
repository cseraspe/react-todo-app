import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from ".";

test("renders app component correctly", () => {
  render(<App />);
  const titleElement = screen.getByText(/SW Group Meeting - Todo App/i);
  expect(titleElement).toBeInTheDocument();
});
