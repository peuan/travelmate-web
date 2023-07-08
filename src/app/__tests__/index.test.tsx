import { render, screen } from "@testing-library/react";
import About from "../../components/About";

describe("About", () => {
  it("renders a about page", () => {
    render(<About />);
    const aboutPageElement = screen.getByText(/About Page/i);
    expect(aboutPageElement).toBeInTheDocument();
  });
});
