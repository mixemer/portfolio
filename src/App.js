import React, {useState, useEffect} from 'react'

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />
      <Home />
      <About setActive={setActive} />
    </div>
  );
}

export default App;
