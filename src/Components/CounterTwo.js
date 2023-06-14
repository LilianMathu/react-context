import React, { useReducer } from "react";

// Initial state object
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// Return new state based on the action type
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CounterTwo = () => {
  // It takes two arguments: the reducer function (reducer) and the initial state (initialState).
  // It returns an array with two elements: count represents the current state, and
  // dispatch is a function used to dispatch actions to update the state.
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* count.firstCounter could also be state.firstCounter */}
      <div>Count 1 is {count.firstCounter}</div>
      <div>Count 2 is {count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
