import type { Calculator } from "../types/Calculator";

export type Action =
  | { type: "ADD_DIGIT"; payload: { digit: string } }
  | { type: "DELETE_DIGIT" }
  | { type: "INVERSE_NUMBER" }
  | { type: "ALL_CLEAR" }
  | { type: "SET_OPERATOR"; payload: { operator: string } }
  | { type: "CALCULATE" };

const initialCalculator: Calculator = {
  digit: "0",
  operator: "",
  firstNumber: "",
  waitingForSecondNumber: false,
};

// function calculatorReducer(caculator: Calculator, action: Action): Calculator {
function calculatorReducer(caculator: Calculator, action: Action) {
  switch (action.type) {
    case "ADD_DIGIT": {
      const { digit, waitingForSecondNumber } = caculator;

      let newDigit = digit;
      let newWaitingForSecondNumber = waitingForSecondNumber;

      if (digit === "0" || waitingForSecondNumber) {
        newDigit = action.payload.digit;
        newWaitingForSecondNumber = waitingForSecondNumber && false;
      } else {
        newDigit += action.payload.digit;
      }

      return {
        ...caculator,
        digit: newDigit,
        waitingForSecondNumber: newWaitingForSecondNumber,
      };
    }

    case "DELETE_DIGIT": {
      const { digit } = caculator;
      const subtraction: number = digit.includes("-") ? 2 : 1;
      const newDigits =
        digit.length - subtraction === 0
          ? "0"
          : digit.slice(0, digit.length - 1);

      return {
        ...caculator,
        digit: newDigits,
      };
    }

    case "INVERSE_NUMBER": {
      const { digit } = caculator;

      if (digit !== "0") {
        const num = Number(digit) * -1;
        return {
          ...caculator,
          digit: num.toString(),
        };
      }

      return caculator;
    }

    case "ALL_CLEAR": {
      return {
        digit: "0",
        operator: "",
        firstNumber: "",
        waitingForSecondNumber: false,
      };
    }

    case "SET_OPERATOR": {
      const { digit, operator } = caculator;
      if (operator !== "") {
        alert("Operator is already defined");
        return caculator;
      }

      return {
        ...caculator,
        operator: action.payload.operator,
        firstNumber: digit,
        waitingForSecondNumber: true,
      };
    }

    case "CALCULATE": {
      const { digit, operator, firstNumber } = caculator;

      if (operator === "") {
        alert("Operator is not asign yet");
        return caculator;
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

      return {
        ...caculator,
        digit: result.toString(),
        operator: "",
        firstNumber: result.toString(),
        waitingForSecondNumber: false,
      };
    }

    default:
      throw new Error("Unknown action.");
  }
}

export { calculatorReducer, initialCalculator };
