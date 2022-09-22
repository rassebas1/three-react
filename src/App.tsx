import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./Components/Cube/Cube";
import {Canvas} from "@react-three/fiber"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>Three</h1>
      </div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      ,
    </div>
  );
}

export default App;
