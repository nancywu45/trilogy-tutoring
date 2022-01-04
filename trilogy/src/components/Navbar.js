import React, { useState } from "react";

const Navbar = () => {
  const [count, setCount] = useState(0);
  return (
    <header>
      <h1>Trilogy Tutoring</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <PropsTest count={count} />
    </header>
  );
};

const PropsTest = ({ count }) => {
  return <h4>counter test: {count}</h4>;
};

export default Navbar;
