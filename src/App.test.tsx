import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders Vite logo", () => {
  render(<App />);
  const viteLogo = screen.getByAltText("Vite logo");
  expect(viteLogo).toBeInTheDocument();
});

test("renders React logo", () => {
  render(<App />);
  const reactLogo = screen.getByAltText("React logo");
  expect(reactLogo).toBeInTheDocument();
});

test("renders learn more text", () => {
  render(<App />);
  const learnMoreText = screen.getByText(
    /Click on the Vite and React logos to learn more/i
  );
  expect(learnMoreText).toBeInTheDocument();
});
