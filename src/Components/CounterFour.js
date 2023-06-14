import React, { useReducer } from "react";

const initialState = {
  counterOne: 0,
  counterTwo: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, counterOne: state.counterOne + action.value };
    }

    case "decrement": {
      return { ...state, counterOne: state.counterOne - action.value };
    }

    case "increment1": {
      return { ...state, counterTwo: state.counterTwo + action.value };
    }

    case "decrement1": {
      return { ...state, counterTwo: state.counterTwo - action.value };
    }

    case "reset": {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

const CounterFour = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count: {state.counterOne} </div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        &nbsp;
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        &nbsp;
      </div>
      <div>
        <div>Count: {state.counterTwo} </div>
        <button onClick={() => dispatch({ type: "increment1", value: 10 })}>
          Increment1
        </button>
        &nbsp;
        <button onClick={() => dispatch({ type: "decrement1", value: 10 })}>
          Decrement1
        </button>
      </div>

      <br />

      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterFour;
