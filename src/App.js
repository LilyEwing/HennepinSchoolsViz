import './App.css';
import TotalEnrollment from "./TotalEnrollment.jsx";
import React, {Component} from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>U.S. Educational Attainment</h1>
        <h3>
          Percentage of adults ages 25 and older with a bachelor's degree or
          higher (2010-2014)
        </h3>
  
        <TotalEnrollment />
       
      </div>
    );
  }
}

export default App;


// export default function App() {
//   return (
//     <div>
//       <TotalEnrollment />
//     </div>
//   );
// }




