import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
    if (count == 0) return;
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <div className="panel">
        <h1 className="panel-label">ຈຸດກວດທີ່ 1 </h1>
    <div className="counter-row">
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
      <span className="count">{count}</span>
      <button className="btn" onClick={handleClick}>
        +
      </button>
      <button className="btn reset" onClick={handleReset}>Reset</button>
    </div>
  </div>
  );
}

export default counter;