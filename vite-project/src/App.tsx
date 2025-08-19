import { useState, type ChangeEvent, type MouseEvent } from "react";
import "./App.css";
import WelcomePage from "./components/welcomePage";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(`btn id=${event.currentTarget.id} clicked!`);
    setCount((prev) => prev + 1);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`input changed to=${event.currentTarget.value}`);
  };
  return (
    <>
      <WelcomePage name="mohammad reza" age={18} />
      <p>count : {count}</p>

      <input type="text" onChange={handleInputChange} />
      <button id="click-me" onClick={handleBtnClick}>
        click me
      </button>
    </>
  );
}

export default App;
