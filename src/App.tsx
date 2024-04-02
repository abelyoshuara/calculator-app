import { useState } from "react";
import type { Caculator } from "./types/Caculator";

export default function App() {
  const [caculator, setCaculator] = useState<Caculator>({
    digit: "0",
    operator: "",
    firstNumber: "",
    waitingForSecondNumber: false,
  });

  const handleAddDigit = (data: string) => {
    const { digit, waitingForSecondNumber } = caculator;

    if (digit === "0" || waitingForSecondNumber) {
      setCaculator((prevState) => ({
        ...prevState,
        digit: data,
      }));

      if (waitingForSecondNumber)
        setCaculator((prevState) => ({
          ...prevState,
          waitingForSecondNumber: !prevState.waitingForSecondNumber,
        }));
    } else {
      setCaculator((prevState) => ({
        ...prevState,
        digit: digit + data,
      }));
    }
  };

  function handleInverseNumber() {
    const { digit } = caculator;

    if (digit !== "0") {
      const num = Number(digit) * -1;
      setCaculator((prevState) => ({
        ...prevState,
        digit: num.toString(),
      }));
    }
  }

  function handleAllClear() {
    setCaculator({
      digit: "0",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    });
  }

  function handleOperator(data: string) {
    const { digit, operator } = caculator;
    if (operator !== "") {
      return alert("Operator is already defined");
    }

    setCaculator((prevState) => ({
      ...prevState,
      operator: data,
      firstNumber: digit,
      waitingForSecondNumber: !prevState.waitingForSecondNumber,
    }));
  }

  function handleCalculate() {
    const { digit, operator, firstNumber } = caculator;

    if (operator === "") {
      return alert("Operator is not asign yet");
    }

    let result: number = 0;
    if (operator === "+") {
      result = Number(firstNumber) + Number(digit);
    } else if (operator === "-") {
      result = Number(firstNumber) - Number(digit);
    } else if (operator === "*") {
      result = Number(firstNumber) * Number(digit);
    } else if (operator === "/") {
      result = Number(firstNumber) / Number(digit);
    }

    setCaculator((prevState) => ({
      ...prevState,
      digit: result.toString(),
      operator: "",
      firstNumber: result.toString(),
      waitingForSecondNumber: !prevState.waitingForSecondNumber,
    }));
  }

  function handleDeleteDigit() {
    const { digit } = caculator;
    const newDigits =
      digit.length - 1 === 0 ? "0" : digit.slice(0, digit.length - 1);

    setCaculator((prevState) => ({
      ...prevState,
      digit: newDigits,
    }));
  }

  return (
    <div className="container my-16">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
        Caculator App
      </h1>

      <div className="max-w-xl mx-auto flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
        <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
          <span id="displayNumber">{caculator.digit}</span>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={handleAllClear}>
            AC
          </button>
          <button className="btn btn-primary" onClick={handleDeleteDigit}>
            DEL
          </button>
          <button className="btn btn-primary" onClick={handleInverseNumber}>
            +/-
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleOperator("/")}
          >
            /
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("7")}
          >
            7
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("8")}
          >
            8
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("9")}
          >
            9
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleOperator("*")}
          >
            *
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("4")}
          >
            4
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("5")}
          >
            5
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("6")}
          >
            6
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("1")}
          >
            1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("2")}
          >
            2
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit("3")}
          >
            3
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary basis-[53%]"
            onClick={() => handleAddDigit("0")}
          >
            0
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleAddDigit(".")}
          >
            .
          </button>
          <button className="btn btn-secondary" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
