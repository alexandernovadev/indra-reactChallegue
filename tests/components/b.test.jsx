import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../src/components/Button";

jest.mock("../../src/styles/components/button.module.css", () => ({
  button: "button data class",
}));

describe("Test In App", () => {
  test("should set color red in background", () => {
    const handleColor = jest.fn();

    render(<Button onClick={handleColor} color={"#f44336"} text={"Rojo"} />);

    // screen.debug();
    const btn = screen.getByRole("button");

    expect(btn.style.background).toBe("rgb(244, 67, 54)");
    expect(btn.className).toBe("button data class");
  });

  test("should call 2 times the button", () => {
    const handleColor = jest.fn();

    render(<Button onClick={handleColor} color={"#f44336"} text={"Rojo"} />);

    // screen.debug();
    const btn = screen.getByRole("button");

    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(handleColor).toHaveBeenCalledTimes(2);
  });
});
