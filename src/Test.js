import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskBar from "./TaskBar";

function Test() {
  const [state, setState] = useState(0);
  useEffect(() => {
    document.title = `hiii you clicked ${state} times`;
  });
  return (
    <div className="tester">
      <Header />
      <TaskBar />
      <h1>hi you clicked {state} times</h1>
      <button onClick={() => setState(state + 1)}></button>
    </div>
  );
}

export default Test;
