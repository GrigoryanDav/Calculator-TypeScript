import { FC } from "react";
import Calculator from "./components/Calculator";
import './App.css'

const App: FC = () => {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
