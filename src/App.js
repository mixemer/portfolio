import React, {useState, useEffect} from 'react'

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <Header active={active} setActive={setActive} />
      <Home setActive={setActive}/>
      <About setActive={setActive} />
      <Skills setActive={setActive}/>
    </div>
  );
}

export default App;
