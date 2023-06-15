import React, { useContext } from "react";
import { counterContext } from "../App";

const ComponentF = () => {
  const countContext = useContext(counterContext);
  return (
    <div>
      Component F: {countContext.countState} &nbsp;
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      &nbsp;
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentF;
