import './App.css';
import LinePlot from "./LinePlot";
import * as d3 from 'd3';
import { useState } from "react";
import "./styles.css";


// function App() {  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>Welcome to my app!</h1>
//         <h2> addkjkjg</h2>
//       </header>
//     </div>
//   );
// }



export default function App() {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <div onMouseMove={onMouseMove}>
      <LinePlot data={data} />
    </div>
  );
}




//export default App;
