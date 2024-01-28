import { useState } from "react";

export default function App() {
  const [result, setResult] = useState<string>("0");
  const [firstDigit, setFirstDigit] = useState<string>("");
  const [secondDigit, setSecondDigit] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [waitingSecondDigit, setWaitingSecondDigit] = useState<boolean>(false);
  const [isAlreadySetOperator, setIsAlreadySetOperator] =
    useState<boolean>(false);

  function handleUpdateDigit(data: string) {
    if (!waitingSecondDigit) {
      setFirstDigit(firstDigit + data);
      setResult(firstDigit + data);
    } else {
      setSecondDigit(secondDigit + data);
      setResult(secondDigit + data);
    }
  }

  function handleOperator(data: string): void {
    if (isAlreadySetOperator) {
      alert("Operator is already");
    }

    setOperator(data);
    setIsAlreadySetOperator(true);
    setWaitingSecondDigit(true);
  }

  function handleCalculate() {
    let res = 0;

    if (operator === "+") {
      res = parseInt(firstDigit) + parseInt(secondDigit);
    } else if (operator === "-") {
      res = parseInt(firstDigit) - parseInt(secondDigit);
    }

    setResult(res.toString());
    setFirstDigit(res.toString());
    setOperator("");
    setIsAlreadySetOperator(false);
    setSecondDigit("");
  }

  function handleInverseNumber() {
    if (firstDigit === "0" || secondDigit === "0") return;
    if (!waitingSecondDigit) {
      const num = parseInt(firstDigit) * -1;
      setFirstDigit(num.toString());
      setResult(num.toString());
    } else {
      const num = parseInt(secondDigit) * -1;
      setSecondDigit(num.toString());
      setResult(num.toString());
    }
  }

  function handleAllClear() {
    setResult("0");
    setFirstDigit("0");
    setSecondDigit("");
    setOperator("");
    setWaitingSecondDigit(false);
    setIsAlreadySetOperator(false);
  }

  return (
    <div className="container my-16">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
        Caculator App
      </h1>

      <div className="max-w-xl mx-auto flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
        <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
          <span id="displayNumber">{result}</span>
        </div>
        <div className="flex gap-3">
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("7")}
          >
            7
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("8")}
          >
            8
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("9")}
          >
            9
          </button>
          <button
            className="btn-primary negative"
            onClick={handleInverseNumber}
          >
            +/-
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("4")}
          >
            4
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("5")}
          >
            5
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("6")}
          >
            6
          </button>
          <button
            className="btn-primary operator"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("1")}
          >
            1
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("2")}
          >
            2
          </button>
          <button
            className="btn-primary"
            onClick={() => handleUpdateDigit("3")}
          >
            3
          </button>
          <button
            className="btn-primary operator"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
        </div>
        <div className="flex gap-3">
          <button className="btn-primary" onClick={handleAllClear}>
            AC
          </button>
          <button
            className="btn-primary basis-[50%]"
            onClick={() => handleUpdateDigit("0")}
          >
            0
          </button>
          <button className="btn-primary operator" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
