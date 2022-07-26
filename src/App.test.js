import { render, screen } from "./test-utils";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />);
  const userName = screen.getByText("User Name");
  expect(userName).toBeInTheDocument();
});
