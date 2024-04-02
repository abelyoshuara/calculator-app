/**
 * test scenario for calculatorReducer
 *
 * - calculatorReducer function:
 *  - should return the initial state
 *  - should return the caculator with the update state when given by ADD_DIGIT action
 *  - should return the caculator with the update state when given by DELETE_DIGIT action
 *  - should return the caculator with the update state when given by INVERSE_NUMBER action
 *  - should return the caculator with the update state when given by ALL_CLEAR action
 *  - should return the caculator with the update state when given by SET_OPERATOR action
 *  - should return the caculator with the update state when given by CALCULATE action
 *
 */

import { Action, calculatorReducer, initialCalculator } from "./calculator";

describe("calculatorReducer function", () => {
  it("should return the initial state", () => {
    const initialState = {
      digit: "0",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    };
    expect(initialCalculator).toEqual(initialState);
  });

  it("should return the caculator with the update state when given by ADD_DIGIT action", () => {
    const initialState = {
      digit: "0",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    };

    const action = {
      type: "ADD_DIGIT",
      payload: {
        digit: "5",
      },
    } as Action;

    const nextState = calculatorReducer(initialState, action);

    if (action.type === "ADD_DIGIT" && action.payload) {
      expect(nextState).toEqual({
        ...initialState,
        digit: action.payload.digit,
      });
    } else {
      assert.fail("Invalid action type or missing payload");
    }
  });

  it("should return the caculator with the update state when given by DELETE_DIGIT action", () => {
    const initialState = {
      digit: "123",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    };

    const action = { type: "DELETE_DIGIT" } as Action;
    const nextState = calculatorReducer(initialState, action);

    if (action.type === "DELETE_DIGIT") {
      const subtraction: number = initialState.digit.includes("-") ? 2 : 1;
      const newDigits =
        initialState.digit.length - subtraction === 0
          ? "0"
          : initialState.digit.slice(0, initialState.digit.length - 1);

      expect(nextState).toEqual({
        ...initialState,
        digit: newDigits,
      });
    } else {
      assert.fail("Invalid action type");
    }
  });

  it("should return the caculator with the update state when given by INVERSE_NUMBER action", () => {
    const initialState = {
      digit: "123",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    };

    const action = { type: "INVERSE_NUMBER" } as Action;
    const nextState = calculatorReducer(initialState, action);

    if (action.type === "INVERSE_NUMBER") {
      expect(nextState).toEqual({
        ...initialState,
        digit: String(Number(initialState.digit) * -1),
      });
    } else {
      assert.fail("Invalid action type");
    }
  });

  it("should return the caculator with the update state when given by ALL_CLEAR action", () => {
    const initialState = {
      digit: "123",
      operator: "+",
      firstNumber: "2",
      waitingForSecondNumber: true,
    };

    const action = { type: "ALL_CLEAR" } as Action;
    const nextState = calculatorReducer(initialState, action);

    if (action.type === "ALL_CLEAR") {
      expect(nextState).toEqual({
        digit: "0",
        operator: "",
        firstNumber: "",
        waitingForSecondNumber: false,
      });
    } else {
      assert.fail("Invalid action type");
    }
  });

  it("should return the caculator with the update state when given by SET_OPERATOR action", () => {
    const initialState = {
      digit: "1",
      operator: "",
      firstNumber: "",
      waitingForSecondNumber: false,
    };

    const action = {
      type: "SET_OPERATOR",
      payload: {
        operator: "+",
      },
    } as Action;

    const nextState = calculatorReducer(initialState, action);

    if (action.type === "SET_OPERATOR" && action.payload) {
      expect(nextState).toEqual({
        ...initialState,
        operator: action.payload.operator,
        firstNumber: initialState.digit,
        waitingForSecondNumber: !initialState.waitingForSecondNumber,
      });
    } else {
      assert.fail("Invalid action type");
    }
  });

  it("should return the caculator with the update state when given by CALCULATE action", () => {
    const initialState = {
      digit: "1",
      operator: "+",
      firstNumber: "2",
      waitingForSecondNumber: true,
    };

    const action = { type: "CALCULATE" } as Action;
    const nextState = calculatorReducer(initialState, action);

    if (action.type === "CALCULATE") {
      const { operator, digit, firstNumber, waitingForSecondNumber } =
        initialState;
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

      expect(nextState).toEqual({
        ...initialState,
        digit: result.toString(),
        operator: "",
        firstNumber: result.toString(),
        waitingForSecondNumber: !waitingForSecondNumber,
      });
    } else {
      assert.fail("Invalid action type");
    }
  });
});
