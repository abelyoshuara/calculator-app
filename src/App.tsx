import { useState } from "react";

export default function App() {
  const [digit, setDigit] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [waitingForSecondNumber, setWaitingForSecondNumber] =
    useState<boolean>(false);

  function handleInputDigit(data: string) {
    if (digit === "0" || waitingForSecondNumber) {
      setDigit(data);
      if (waitingForSecondNumber) setWaitingForSecondNumber(false);
    } else {
      setDigit(digit + data);
    }
  }

  function handleInverseNumber() {
    if (digit !== "0") {
      const num = Number(digit) * -1;
      setDigit(num.toString());
    }
  }

  function handleAllClear() {
    setDigit("0");
    setOperator("");
    setFirstNumber("");
    setWaitingForSecondNumber(false);
  }

  function handleOperator(data: string) {
    if (operator !== "") {
      return alert("Operator is already defined");
    }

    setOperator(data);
    setFirstNumber(digit);
    setWaitingForSecondNumber(true);
  }

  function handleCalculate() {
    if (operator === "") {
      return alert("Operator is not asign yet");
    }

    let result: number = 0;
    if (operator === "+") {
      result = Number(firstNumber) + Number(digit);
    } else if (operator === "-") {
      result = Number(firstNumber) - Number(digit);
    }

    setDigit(result.toString());
    setOperator("");
    setFirstNumber(result.toString());
    setWaitingForSecondNumber(false);
  }

  return (
    <div className="container my-16">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
        Caculator App
      </h1>

      <div className="max-w-xl mx-auto flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
        <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
          <span id="displayNumber">{digit}</span>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("7")}
          >
            7
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("8")}
          >
            8
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("9")}
          >
            9
          </button>
          <button className="btn btn-secondary" onClick={handleInverseNumber}>
            +/-
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("4")}
          >
            4
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("5")}
          >
            5
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("6")}
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
            onClick={() => handleInputDigit("1")}
          >
            1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("2")}
          >
            2
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleInputDigit("3")}
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
          <button className="btn btn-primary" onClick={handleAllClear}>
            AC
          </button>
          <button
            className="btn btn-primary basis-[50%]"
            onClick={() => handleInputDigit("0")}
          >
            0
          </button>
          <button className="btn btn-secondary" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
