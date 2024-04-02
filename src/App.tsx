import { useReducer } from "react";
import {
  Action,
  caculatorReducer,
  initialCaculator,
} from "./reducers/caculator";

export default function App() {
  const [caculator, dispatch] = useReducer(caculatorReducer, initialCaculator);

  const handleAddDigit = (digit: string) => {
    dispatch({
      type: "ADD_DIGIT",
      payload: {
        digit,
      },
    } as Action);
  };

  const handleInverseNumber = () => {
    dispatch({ type: "INVERSE_NUMBER" } as Action);
  };

  const handleAllClear = () => {
    dispatch({ type: "ALL_CLEAR" } as Action);
  };

  const handleSetOperator = (operator: string) => {
    dispatch({
      type: "SET_OPERATOR",
      payload: {
        operator,
      },
    } as Action);
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" } as Action);
  };

  const handleDeleteDigit = () => {
    dispatch({ type: "DELETE_DIGIT" } as Action);
  };

  return (
    <div className="container my-16">
      <h1 className="text-slate-700 text-4xl font-bold text-center mt-20 mb-8">
        Caculator App
      </h1>

      <div className="max-w-xl mx-auto flex flex-col gap-y-3 border shadow-sm p-4 rounded-lg">
        <div className="bg-slate-800 w-full p-10 rounded-lg text-slate-100 text-end text-[1.3rem] font-semibold">
          <span id="displayNumber" data-testid="displayNumber">
            {caculator.digit}
          </span>
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
            onClick={() => handleSetOperator("/")}
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
            onClick={() => handleSetOperator("*")}
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
            onClick={() => handleSetOperator("-")}
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
            onClick={() => handleSetOperator("+")}
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
