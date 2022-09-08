import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let timer: NodeJS.Timer;

  useEffect(() => {
    timer = setInterval(() => {
      console.log(count);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); // add count to dep array to fix wrong console log

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ marginBottom: 30 }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>+ 1 to count</button>
    </div>
  );
}

export default App;
