/**
 * test scenario for App component
 *
 * - App component
 *   - should render caculator correctly
 *   - should handle addition correctly
 *   - should handle subtraction correctly
 *   - should handle multiplication correctly
 *   - should handle division correctly
 */

import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("App component", () => {
  it("should render caculator correctly", () => {
    render(<App />);

    const title = screen.getByText(/caculator app/i);
    expect(title).toBeInTheDocument();

    const displayNumber = screen.getByTestId("displayNumber");
    expect(displayNumber).toBeInTheDocument();

    const buttonAC = screen.getByRole("button", { name: "AC" });
    expect(buttonAC).toBeInTheDocument();

    const buttonDEL = screen.getByRole("button", { name: "DEL" });
    expect(buttonDEL).toBeInTheDocument();

    const buttonInverse = screen.getByRole("button", { name: "+/-" });
    expect(buttonInverse).toBeInTheDocument();

    const button1 = screen.getByRole("button", { name: "1" });
    expect(button1).toBeInTheDocument();

    const button2 = screen.getByRole("button", { name: "2" });
    expect(button2).toBeInTheDocument();

    const button3 = screen.getByRole("button", { name: "3" });
    expect(button3).toBeInTheDocument();

    const button4 = screen.getByRole("button", { name: "4" });
    expect(button4).toBeInTheDocument();

    const button5 = screen.getByRole("button", { name: "5" });
    expect(button5).toBeInTheDocument();

    const button6 = screen.getByRole("button", { name: "6" });
    expect(button6).toBeInTheDocument();

    const button7 = screen.getByRole("button", { name: "7" });
    expect(button7).toBeInTheDocument();

    const button8 = screen.getByRole("button", { name: "8" });
    expect(button8).toBeInTheDocument();

    const button9 = screen.getByRole("button", { name: "9" });
    expect(button9).toBeInTheDocument();

    const button0 = screen.getByRole("button", { name: "0" });
    expect(button0).toBeInTheDocument();

    const buttonDot = screen.getByRole("button", { name: "." });
    expect(buttonDot).toBeInTheDocument();

    const buttonPlus = screen.getByRole("button", { name: "+" });
    expect(buttonPlus).toBeInTheDocument();

    const buttonMinus = screen.getByRole("button", { name: "-" });
    expect(buttonMinus).toBeInTheDocument();

    const buttonMultiplication = screen.getByRole("button", { name: "*" });
    expect(buttonMultiplication).toBeInTheDocument();

    const buttonDivide = screen.getByRole("button", { name: "/" });
    expect(buttonDivide).toBeInTheDocument();

    const buttonEqual = screen.getByRole("button", { name: "=" });
    expect(buttonEqual).toBeInTheDocument();
  });

  it("should handle addition correctly", async () => {
    render(<App />);

    const button1 = screen.getByRole("button", { name: "1" });
    await userEvent.click(button1);

    const buttonInverse = screen.getByRole("button", { name: "+/-" });
    await userEvent.click(buttonInverse);

    const buttonPlus = screen.getByRole("button", { name: "+" });
    await userEvent.click(buttonPlus);

    const button2 = screen.getByRole("button", { name: "2" });
    await userEvent.click(button2);

    const buttonEqual = screen.getByRole("button", { name: "=" });
    await userEvent.click(buttonEqual);

    const displayNumber = screen.getByTestId("displayNumber");
    expect(displayNumber.textContent).toEqual("1");
  });

  it("should handle subtraction correctly", async () => {
    render(<App />);

    const button5 = screen.getByRole("button", { name: "5" });
    await userEvent.click(button5);

    const buttonMinus = screen.getByRole("button", { name: "-" });
    await userEvent.click(buttonMinus);

    const button2 = screen.getByRole("button", { name: "2" });
    await userEvent.click(button2);

    const buttonEqual = screen.getByRole("button", { name: "=" });
    await userEvent.click(buttonEqual);

    const displayNumber = screen.getByTestId("displayNumber");
    expect(displayNumber.textContent).toEqual("3");
  });

  it("should handle multiplication correctly", async () => {
    render(<App />);

    const button5 = screen.getByRole("button", { name: "5" });
    await userEvent.click(button5);

    const buttonMultiplication = screen.getByRole("button", { name: "*" });
    await userEvent.click(buttonMultiplication);

    const button2 = screen.getByRole("button", { name: "2" });
    await userEvent.click(button2);

    const buttonEqual = screen.getByRole("button", { name: "=" });
    await userEvent.click(buttonEqual);

    const displayNumber = screen.getByTestId("displayNumber");
    expect(displayNumber.textContent).toEqual("10");
  });

  it("should handle division correctly", async () => {
    render(<App />);

    const button6 = screen.getByRole("button", { name: "6" });
    await userEvent.click(button6);

    const buttonDivide = screen.getByRole("button", { name: "/" });
    await userEvent.click(buttonDivide);

    const button3 = screen.getByRole("button", { name: "3" });
    await userEvent.click(button3);

    const buttonEqual = screen.getByRole("button", { name: "=" });
    await userEvent.click(buttonEqual);

    const displayNumber = screen.getByTestId("displayNumber");
    expect(displayNumber.textContent).toEqual("2");
  });
});
