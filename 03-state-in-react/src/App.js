import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const handleClick = (m) => {
    console.log(m);
    setCount(count + 1);
  }
  return (
    <div>
      {count}
      <button onClick={handleClick}>Animal</button>
    </div>
  );
}

export default App;
