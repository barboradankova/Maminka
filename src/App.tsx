import React, { useState } from "react";
import lupen1 from "./image/lupen1.png";
import lupen2 from "./image/lupen2.png";
import lupen3 from "./image/lupen3.png";
import lupen4 from "./image/lupen4.png";
import lupen5 from "./image/lupen5.png";
import lupen6 from "./image/lupen6.png";
import lupen7 from "./image/lupen7.png";
import lupen8 from "./image/lupen8.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button className="App__button" onClick={() => setCount(count + 1)}>
        Klikni
      </button>
      {count >= 1 && <img className="lupen-1" alt="lupen" src={lupen1} />}
      {count >= 2 && <img className="lupen-2" alt="lupen" src={lupen2} />}
      {count >= 3 && <img className="lupen-3" alt="lupen" src={lupen3} />}
      {count >= 4 && <img className="lupen-4" alt="lupen" src={lupen4} />}
      {count >= 5 && <img className="lupen-5" alt="lupen" src={lupen5} />}
      {count >= 6 && <img className="lupen-6" alt="lupen" src={lupen6} />}
      {count >= 7 && <img className="lupen-7" alt="lupen" src={lupen7} />}
      {count >= 8 && <img className="lupen-8" alt="lupen" src={lupen8} />}
      {count >= 9 && <h1>Krásny deň matiek!</h1>}
    </div>
  );
}

export default App;
