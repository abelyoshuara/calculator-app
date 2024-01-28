import { useState } from "react";

export default function App() {
  const [currentValue, setCurrentValue] = useState<string>("0");

  function handleClick(data: string): void {
    if (currentValue !== "0") setCurrentValue(currentValue + data);
    else setCurrentValue(data);
  }

  return (
    <>
      <div className="container my-16">
        <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
          Caculator App
        </h1>

        <div className="max-w-xl mx-auto flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
          <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
            <span id="displayNumber">{currentValue}</span>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="btn-primary" onClick={() => handleClick("8")}>
              8
            </button>
            <button className="btn-primary" onClick={() => handleClick("9")}>
              9
            </button>
            <button className="btn-primary negative">+/-</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary" onClick={() => handleClick("4")}>
              4
            </button>
            <button className="btn-primary" onClick={() => handleClick("5")}>
              5
            </button>
            <button className="btn-primary" onClick={() => handleClick("6")}>
              6
            </button>
            <button className="btn-primary operator">-</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary" onClick={() => handleClick("1")}>
              1
            </button>
            <button className="btn-primary" onClick={() => handleClick("2")}>
              2
            </button>
            <button className="btn-primary" onClick={() => handleClick("3")}>
              3
            </button>
            <button className="btn-primary operator">+</button>
          </div>
          <div className="flex gap-3">
            <button className="btn-primary">AC</button>
            <button
              className="btn-primary basis-[50%]"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button className="btn-primary operator">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
