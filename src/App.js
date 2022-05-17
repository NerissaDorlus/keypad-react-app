import { useState } from "react";
import "./App.css";

function App() {
  const [digit, setDigit] = useState("");

  const backButton = () => {
    setDigit(digit.slice(0, digit.length - 1));
  };

  const validateButton = () => {
    digit === "9876" ? setDigit("Come In!") : setDigit("❌Try again❌");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Keypad</h1>
        <br></br>
        <h2>{digit}</h2>

        <section>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "3");
            }}
          >
            3
          </button>
        </section>

        <section>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "6");
            }}
          >
            6
          </button>
        </section>

        <section>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "9");
            }}
          >
            9
          </button>
        </section>

        <section>
          <button onClick={backButton}>⬅️</button>
          <button
            onClick={() => {
              if (digit.length < 4) setDigit(digit + "0");
            }}
          >
            0{" "}
          </button>
          <button onClick={validateButton}>✅</button>
        </section>
      </header>
    </div>
  );
}

export default App;
