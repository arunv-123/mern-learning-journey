import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="btn" onClick={decrement}>−</button>

      <div className="count-circle">{count}</div>

      <button className="btn" onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
