import { createContext, useReducer } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

export const counterContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }

    case "reset": {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <counterContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count is: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </counterContext.Provider>
  );
}

export default App;
