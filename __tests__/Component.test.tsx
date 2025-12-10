import { render, screen } from "@testing-library/react";
import Component from "../packages/Component";
import '@testing-library/jest-dom';


describe("Component", () => {
  it("renders children and button with props", () => {
    render(
      <Component className="test-button" onClick={() => { }}>
        Click me
      </Component>
    );

    expect(screen.getByText("Powered by Ar-Sr-Na")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("test-button");
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});