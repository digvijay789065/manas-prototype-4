import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the Navbar with 'Dr. Manas'", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navbarElement = screen.getByText(/Dr. Manas/i);
  expect(navbarElement).toBeInTheDocument();
});

test("renders the Home page with 'Welcome to Dr. Manas'", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Welcome to Dr. Manas/i);
  expect(headingElement).toBeInTheDocument();
});
