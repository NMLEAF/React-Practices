import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((c) => (c = c + 1))}>
        Count {count}
      </button>
    </>
  );
}

export default Counter;
