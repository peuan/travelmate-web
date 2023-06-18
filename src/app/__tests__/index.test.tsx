import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home", () => {
  it("renders a home page", () => {
    render(<Home />);
    const homePageElement = screen.getByText(/Home Page/i);
    expect(homePageElement).toBeInTheDocument();
  });
});
