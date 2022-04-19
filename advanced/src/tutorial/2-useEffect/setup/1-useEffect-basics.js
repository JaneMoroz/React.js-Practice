import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useeffect");
    // Cant place hooks as conditionals =>
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  // Runs ONLY on initital render,
  // because of empty array as a parameter
  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
